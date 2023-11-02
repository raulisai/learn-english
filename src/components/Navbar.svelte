<script>
	import { page } from '$app/stores';

	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'apeaking', path: '/speaking' },
		{ name: 'Conversation ', path: '/conversation' }
	];
</script>

<nav class="bg-gray-900 rounded-full p-4 w-full">
	<div class="flex justify-between items-center md:px-4">
		<a href="/" class=" ">📚</a>
		<ul class="flex">
			{#each routes as route}
				<li>
					<a
						href={route.path}
						class={$page.url.pathname === route.path
							? 'active'
							: 'p-4 hover:text-sky-300 text-lg text-white'}
					>
						{route.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.active {
		@apply p-4 text-lg text-orange-600 border-b-2 border-orange-600;
	}
</style>
