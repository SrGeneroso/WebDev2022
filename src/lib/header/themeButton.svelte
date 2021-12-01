<script>


    import { onMount } from "svelte";
    import { currentTheme } from '../../stores.js';

    const STORAGE_KEY = "theme";
    const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

    const THEMES = {
        DARK: "dark",
        LIGHT: "light",
    };
    
    

    const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

    const toggleTheme = () => {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (stored) {
            // clear storage
            localStorage.removeItem(STORAGE_KEY);
        } else {
            // store opposite of preference
            localStorage.setItem(
                STORAGE_KEY,
                prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK
            );
        }

        applyTheme();
    };

    const applyTheme = () => {
        const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
        $currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

        $currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

        if ($currentTheme === THEMES.DARK) {
            document.body.classList.remove(THEMES.LIGHT);
            document.body.classList.add(THEMES.DARK);
        } else {
            document.body.classList.remove(THEMES.DARK);
            document.body.classList.add(THEMES.LIGHT);
        }
    };

    onMount(() => {
        applyTheme();
        window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
    });
</script>



<input type="checkbox" id="button" on:click={toggleTheme} />
<label for="button" />


<style>
    #button {
        display: none;
    }

    #button + label::after {
        content: "☀️";
        cursor: pointer;
    }

    #button:checked + label::after{
        content: "🌑";
    }
    label{
        font-size: 2em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
