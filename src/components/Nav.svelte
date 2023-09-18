<script>
    import { onMount } from "svelte";

    let links = [
        { text: "Writing", path: "/" },
        { text: "About", path: "/about" },
    ];

    let currentPath, currentPathIsPost;
    onMount(() => {
        currentPath = window.location.pathname;
        currentPathIsPost = currentPath.includes("posts");
    });
</script>

<nav class="absolute top-4 right-4 z-50 border-r dark:border-pop md:right-20 xl:right-52">
    <ul class="m-0 flex list-none flex-col">
        {#each links as link}
            <li class="inline p-0">
                <a
                    href={link.path}
                    class={`pr-4 lowercase dark:text-pop ${
                        link.path === currentPath ||
                        (link.text === "Writing" && currentPathIsPost)
                            ? "font-bold"
                            : ""
                    }`}
                >
                    {link.text}
                </a>
            </li>
        {/each}
    </ul>
</nav>
