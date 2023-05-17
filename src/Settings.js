const Settings = () => {
const changeTheme = () => {
    const toggle = document.getElementById('theme')
    const body = document.body

    if (toggle.value === 'light') {
        body.classList.add('light');
    } else { 
        body.classList.remove('light')
    }
}

    return ( 
        <section className="settings">
            <h1>Settings</h1>
            <h3>Theme:</h3>
            <select name="" 
                id="theme"
                onChange={changeTheme}>
                    <option value="light">Light</option>
                    <option selected value="dark">Dark</option>
                </select>
        </section>
     );
}
 
export default Settings;