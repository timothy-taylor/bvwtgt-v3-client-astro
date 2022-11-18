<script> 
  export let activePath;

  const links = [
    { text: "Writing", path: "/" },
    { text: "About", path: "/about" },
  ];
</script>

<nav class="absolute top-4 right-4 md:right-20 md:border-r">
  <ul class="list-none m-0 flex flex-col">
    {#each links as link}
         <li class="inline p-0">
          <a
            href={link.path}
            class={`pr-4 lowercase dark:text-[#8A938C] ${
              activePath === link.path ? "font-bold" : ""
            }`}
          >
            {link.text}
          </a>
        </li>
    {/each}
  </ul>
</nav>
