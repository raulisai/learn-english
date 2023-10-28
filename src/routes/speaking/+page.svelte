<script>
	import List from "./List.svelte";
	import ListItem from "./ListItem.svelte";

    export let data;
    const isActive= true;


    console.log(data.res[0].id);

</script>

<div class=" mt-5  grid justify-items-center">
    <h3 class=" text-2xl mt-5 mb-5 font-mono text-center "> Lecturas</h3>
    <div class=" bg-slate-400/20 w-full md:w-1/2">
        <div class="py-4 px-6 text-sm font-medium">
            <ul class="flex space-x-3">
            <li>
                <a
                  href="/speaking/1"
                  class={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
                >
                Principiamte
                </a>
              </li>
              <li>
                <a
                  href="/speaking/1"
                  class='block px-3 py-1 rounded-md border-2 '
                >
                medio
                </a>
              </li>
              <li>
                <a
                  href="/speaking/1"
                  class='block px-3 py-1 rounded-md border-2 '
                >
                dificil
                </a>
              </li>
            </ul>
            </div>

        <List>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </List>
              
    </div>
    

 
</div>