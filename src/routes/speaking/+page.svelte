<script>
	import List from '../../components/List.svelte';
	import ListItem from '../../components/ListItem.svelte';

	export let data;
	let Lecturas = data.lecturas;
	let respLecturas = data.lecturas;
	let markLevel = 'Principiante';

	let Levels = ['Principiante', 'Medio', 'Dificil'];

	function changeLevel(level) {
		markLevel = level;
		Lecturas = respLecturas.filter((lectura) => lectura.nivel == level);
	}
	
</script>

<div class=" mt-5 grid justify-items-center">
	<div class=" bg-slate-400/20 w-full md:w-1/2 rounded-md">
		<h3 class=" text-2xl mt-5 mb-5 font-mono text-center">Lecturas</h3>
		<div class="py-4 px-6 text-sm font-medium">
			<ul class="flex space-x-3">
				{#each Levels as level}
					<li>
						<button
							on:click={() => changeLevel(level)}
							class={`block px-3 py-2 rounded-md ${
								level == markLevel ? 'bg-sky-500 text-white' : 'bg-slate-50'
							}`}
						>
							{level}
						</button>
					</li>
				{/each}
			</ul>
		</div>

		<div class="overflow-x-auto max-h-[600px]">
			<List>
				{#each Lecturas as lectura}
					<ListItem title={lectura.title} level={lectura.nivel} tema={lectura.tema} id={lectura.id} />
				{/each}
			</List>
		</div>
	</div>
</div>
