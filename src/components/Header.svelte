<script>
  import { createEventDispatcher } from "svelte";
  import { Link } from "svelte-routing";
  import { _ } from "../services/i18n";
  import { locale, theme } from "../store.js";

  const dispatch = createEventDispatcher();

  let checked = $theme === "light";

  function changeTheme() {
    if ($theme === "dark" || $theme === null || $theme === undefined) {
      theme.set("light");
    } else {
      theme.set("dark");
    }
  }

  function handleLocaleChange(e) {
    locale.set(e.target.value);
    dispatch("localeChanged", e.target.value);
  }

  export let auth;
</script>

<div class="navbar bg-base-100">
  <input type="checkbox" id="localeSelector" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box font-pixl">
      <label
        for="localeSelector"
        class="btn btn-circle absolute top-0 right-0 m-4"
      >
        <span class="material-icons-round">close</span>
      </label>
      <p class="text-2xl"><b>{$_("header.language")}</b></p>
      <div class="form-control w-full max-w-xs my-4">
        <select
          class="select select-bordered text-xl w-full font-normal"
          value={$locale}
          on:change|preventDefault={handleLocaleChange}
        >
          <option value="en">{$_("header.languages.en")}</option>
        </select>
      </div>
    </div>
  </div>
  <div class="flex-1">
    <Link class="btn btn-ghost" to="/CharityWebsite">
      <span class="normal-case font-pixl font-extrabold text-3xl tracking-wider"
        >{$_("app.name")}</span
      >
      <img class="h-full" src="assets/images/vivi.png" alt="Pixelator Logo" />
    </Link>
  </div>
  <ul class="menu menu-horizontal px-1">
    <li>
      <button class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </button>
      <ul class="menu bg-base-300 p-2 rounded-box right-0 z-10">
        <li>
          <label class="btn btn-ghost swap swap-rotate">
            <input type="checkbox" {checked} on:change={changeTheme} />
            <span class="material-icons-round swap-on w-10 h-10 text-4xl"
              >light_mode</span
            >
            <span class="material-icons-round swap-off w-10 h-10 text-4xl"
              >dark_mode</span
            >
          </label>
        </li>
        <!-- <li>
          <label for="localeSelector" class="btn btn-ghost flex flex-col">
            <span class="material-icons-round text-4xl">language</span>
          </label>
        </li> -->
      </ul>
    </li>
  </ul>
</div>
