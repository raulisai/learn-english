<script>
	import List from './List.svelte';
	import ListItem from './ListItem.svelte';

	export let data;
	const lecturas = data.res;
  const markLevel=1;

	let Levels = [
		{ name: 'Principiante', path: '/speaking/1', isActive: true },
		{ name: 'Medio', path: '/speaking/2', isActive: false },
		{ name: 'Dificil', path: '/speaking/3', isActive: false }
	];
</script>

<div class=" mt-5 grid justify-items-center">
	<h3 class=" text-2xl mt-5 mb-5 font-mono text-center">Lecturas</h3>
	<div class=" bg-slate-400/20 w-full md:w-1/2">
		<div class="py-4 px-6 text-sm font-medium">
			<ul class="flex space-x-3">
				{#each Levels as level}
					<li>
						<a
							href={level.path}
							class={`block px-3 py-2 rounded-md ${
								level.isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'
							}`}
						>
							{level.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<List>
			{#each lecturas as lectura}
				<ListItem title={lectura.title} level={lectura.nivel} tema={lectura.tema}/>
			{/each}
		</List>
	</div>
</div>
