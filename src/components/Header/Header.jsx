import Themeswitcher from '../ThemeSwitcher/ThemeSwitcher.jsx'
import './Header.css'

function Header({theme,toggleTheme}){
    return(
        <header className={`header ${theme}`}>
            <h1>React Theme Switcher</h1>
            <Themeswitcher theme = {theme} toggleTheme = {toggleTheme} />
        </header>
    )
}
export default Header;