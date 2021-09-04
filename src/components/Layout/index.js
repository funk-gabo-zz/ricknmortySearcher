import { Home } from "../../pages/Home"
import { LayoutContainer } from "./styles"

export const Layout = ({children}) => {
    return (
        <LayoutContainer>
        <Home />
        {children}
        </LayoutContainer>
    )
}