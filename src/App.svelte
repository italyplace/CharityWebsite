<script>
  import { Route, Router } from "svelte-routing";
  import { isLocaleLoaded, setupI18n } from "./services/i18n";
  import { locale, theme } from "./store.js";

  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";

  import Home from "./routes/home/Home.svelte";
  import NotFound from "./routes/NotFound.svelte";

  $: if (!$isLocaleLoaded) {
    if ($locale === null || $locale === undefined) locale.set("en");
    setupI18n({ withLocale: $locale });
  }

  export let url = "";
</script>

<Router {url}>
  {#if $isLocaleLoaded}
    <div
      data-theme={$theme === "light" ? "garden" : "dark"}
      class="flex flex-col min-h-screen"
    >
      <div class="flex flex-col grow h-full">
        <Header on:localeChanged={(e) => setupI18n({ withLocale: e.detail })} />
        <Route path="/CharityWebsite" component={Home} />
        <Route component={NotFound} />
      </div>
      <Footer />
    </div>
  {:else}
    <div class="flex h-screen justify-center items-center">
      <h1
        class="font-pixl font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
      >
        Loading...
      </h1>
    </div>
  {/if}
</Router>
