<script>
	import { page } from "$app/stores";
	import logoWebdevLight from "./image/logo-webdev-light.png";
	import logoWebdevDark from "./image/logo-webdev-dark.png";
	import logoGitLight from "./image/logo-git-light.png";
	import logoGitDark from "./image/logo-git-dark.png";
	import ThemeButton from "./themeButton.svelte";
	import { currentTheme } from '../../stores.js';
	



</script>

<header>
	<div class="corner left">
		<!-- TODO put url of Netlify deployment -->
		<a href="https://webdev2022.netlify.app/">
			{#if $currentTheme === 'light'}
				<img src="{logoWebdevLight}" alt="WebDev 2022" />
			{:else}
				<img src="{logoWebdevDark}" alt="WebDev 2022" />
			{/if}
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === "/"}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.path === "/about"}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner right">
		<ThemeButton />

		<a href="https://github.com/SrGeneroso/WebDev2022" target="_blank">			
			{#if $currentTheme === 'light'}
				<img src="{logoGitLight}" alt="Repo WebDev 2022" />
			{:else}
				<img src="{logoGitDark}" alt="Repo WebDev 2022" />
			{/if}
		</a>
	</div>
</header>

<style>

	header {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.corner {
		width: 3em;
		height: 3em;
		padding-right: 0.5rem;
		padding-left: 0.5rem;
		display: flex;
		gap: 0.5rem;
	}
	.left {
		flex-direction: row;
	}

	.right {
		flex-direction: row-reverse;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2.5em;
		height: 2.5em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
		--background: var(--nav-background);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--nav-background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--nav-background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--text-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
