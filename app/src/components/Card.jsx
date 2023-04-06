import { CardStyled } from "./styles/Card.styled";


export default function Card({ children, item }) {
    return (
        <CardStyled title={item.title} bgImage={item.image}>

            {children}

        </CardStyled>
    )
}