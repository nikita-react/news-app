import styled from "styled-components";

interface ButtonProps {
    active: boolean;
}

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 33px;
    gap:5px;
`;
const InputWrapper = styled.div`    
    display: flex;
    flex-direction: row;
    border:1px solid rgb(120, 120, 120);
    border-radius: 3px;
    height: 100%;
    padding-right: 40px;
    position: relative;
`;
const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 16px;  
    padding: 0 10px;
    flex-grow: 1;
`;

const SearchToggleButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 3px;
    cursor: pointer;    
    transition: 0.2s;  
    &:hover {
        background: rgb(247, 247, 247);
    }  
    background: ${({ active }) => active && 'rgb(247, 247, 247)'}
`;

const ClearButton = styled.button`
    cursor: pointer;   
    font-size: 9px;
    color: rgb(179, 179, 179);
    padding: 0 10px;     
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
`;

const SearchSubmitButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;        
    width: 34px;
    height: 34px;
    background: rgb(86, 123, 149);
    opacity: 0.5;
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    border-radius: 3px;
    transition: 0.5s;
    opacity: ${({ active }) => active && 1}
`;

export { SearchWrapper, Input, InputWrapper, SearchToggleButton, ClearButton, SearchSubmitButton };