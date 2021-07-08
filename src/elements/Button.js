import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

    const {text, _onClick, is_float, children, margin, width, padding} = props;

    if(is_float){
       return (
        <React.Fragment>
            <FloatButton onClick={_onClick}>{text? text: children}</FloatButton>
        </React.Fragment>
        );
    }
    
    const styles = {
        margin: margin,
        width: width,
        padding: padding,
    };

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
        </React.Fragment>
    );
}

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    padding: "12px 0px",
    width: "80%",
}

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color: #212121;
    color: #ffffff;
    padding: ${(props) => props.padding};
    box-sizing: boder-box;
    border: none;
    ${(props) => (props.margin? `margin: ${props.margin};` : ``)}
`;

const FloatButton = styled.button`
    width: 47px;
    heigth: 60px;
    background-color: #212121;
    color: #ffffff;
    box-sizing: border-box;
    font-size: 40px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center;
    border: none;
    border-radius: 60px;
    align-items: center;
    vertical-align: middle;
`;

export default Button;
