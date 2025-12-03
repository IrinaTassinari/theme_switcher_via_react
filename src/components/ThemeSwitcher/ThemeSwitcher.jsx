import './ThemeSwitcher.css'

function ThemeSwitcher({theme,toggleTheme}){
     return(
        <button className={`theme-switcher ${theme}`} onClick={toggleTheme}>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
     )
}
export default ThemeSwitcher;