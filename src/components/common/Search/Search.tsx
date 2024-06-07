import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchWrapper, Input, SearchToggleButton, ClearButton, SearchSubmitButton, InputWrapper } from './styled';

const Search = () => {
    const [toggleInput, setToggleInput] = useState<boolean>(false);
    const [showClearBtn, setShowClearBtn] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');

    const toggleSearchBar = () => {
        setToggleInput(prev => !prev);
        setShowClearBtn(false);
        setSearchText('');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
        setShowClearBtn(value.length > 0);
    };

    const clearInput = () => {
        setSearchText('');
        setShowClearBtn(false);
    };

    const handleSearchSubmit = () => {
        // Logic for submitting search
        console.log('Search submitted:', searchText);
    };

    return (
        <SearchWrapper>
            <SearchToggleButton active={toggleInput} onClick={toggleSearchBar}>
                <SearchIcon className='!w-4' />
            </SearchToggleButton>
            {toggleInput && (
                <>
                    <InputWrapper>
                        <Input
                            placeholder='SEARCH'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        {showClearBtn && (
                            <ClearButton onClick={clearInput}>clear</ClearButton>
                        )}
                    </InputWrapper>
                    <SearchSubmitButton disabled={!showClearBtn} active={showClearBtn} onClick={handleSearchSubmit} >GO</SearchSubmitButton>
                </>
            )}
        </SearchWrapper>
    );
};

export default Search;
