import styled, { ThemeProvider } from "styled-components";

const defaultMainColor = "#118ab2";

const Anchor = styled.a`
    display: inline-block;
    font-size: 18px;
    text-decoration: none;
    color: ${({theme}) => theme.mainColor || defaultMainColor};
    padding: 10px 16px;
    border: solid 1px ${(props) => props.theme.mainColor};
    margin: 5px;
    transition: 320ms;
    &:hover {
        background-color: ${({theme}) => theme.mainColor};
        color: white;
        opacity: 0.7
    }
`;

const Paragraph = styled.p`
    border: solid 1px ${(props) => props.theme.mainColor};
    padding: 10px;
    color: ${(props) => props.theme.mainColor};
`

const LightTheme = {
    mainColor: "#ffafcc"
}

const DarkTheme = {
    mainColor: "#003049"
}

export const StyledComponents = () => {
    return (
        <div>
            <h2>Styled Components</h2>
            <ThemeProvider theme = {LightTheme}>
                <Anchor href="www.google.com">Soy un enlace</Anchor>
                <Anchor href="www.google.com">Soy un enlace</Anchor>
                <Anchor href="www.google.com">Soy un enlace</Anchor>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque accusamus eos, asperiores sit ratione laudantium sequi minima necessitatibus. Recusandae labore ratione perferendis placeat praesentium voluptatem non nemo magnam sed?
                </Paragraph>
            </ThemeProvider>
            <ThemeProvider theme = {DarkTheme}>
                <Anchor href="www.google.com">Soy un enlace</Anchor>
                <Anchor href="www.google.com">Soy un enlace</Anchor>
                <Anchor href="www.google.com">Soy un enlace</Anchor>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque accusamus eos, asperiores sit ratione laudantium sequi minima necessitatibus. Recusandae labore ratione perferendis placeat praesentium voluptatem non nemo magnam sed?
                </Paragraph>
            </ThemeProvider>
            
        </div>
    )
}

