<script>
  import { _ } from "../../services/i18n";
  import Pixelization from "./components/pixelization/Pixelization.svelte";
</script>

<div>
  <div class="flex flex-col items-center justify-center bg-base-100">
    <h1
      class="font-pixl font-extrabold text-8xl tracking-wide my-8 text-center"
    >
      {$_("app.name")}
    </h1>
    <p class="font-pixl font-normal text-4xl mb-8 text-center">
      {$_("home.description.place")}
    </p>
  </div>
  <svg class="bg-base-100" viewBox="0 -25 1200 145" preserveAspectRatio="none">
    <path
      class="fill-base-200"
      d="M-5 150V27.35A600.21 600.21 0 00321.39 56.44C379.39 45.65 435.55 26.31 493.39 14.58 575.78-2.14 661.58-3.15 743.84 14.19 823.78 31 906.67 72 985.66 92.83 1055.71 111.31 1132.19 118.92 1205 95.83V150Z"
    />
    <path
      class="stroke-[#f8a5a8] stroke-primary fill-transparent stroke-[5]"
      d="M-5 27.35A600.21 600.21 0 00321.39 56.44C379.39 45.65 435.55 26.31 493.39 14.58 575.78-2.14 661.58-3.15 743.84 14.19 823.78 31 906.67 72 985.66 92.83 1055.71 111.31 1132.19 118.92 1205 95.83"
    />
  </svg>
  <Pixelization />
  <svg class="bg-base-200" viewBox="0 -25 1200 145" preserveAspectRatio="none">
    <path
      class="fill-base-100"
      d="M-5 39 28.5 32C57 25 114 11 171.2 5.7 228.3.3 285.7 3.7 342.8 22.7 400 41.7 457 76.3 514.2 95.8 571.3 115.3 628.7 119.7 685.8 103.8 743 88 800 52 857.2 41.7 914.3 31.3 971.7 46.7 1028.8 63.7 1086 80.7 1143 99.3 1171.5 108.7L1205 118V150H-5Z"
    />
    <path
      class="stroke-[#f1b5f7] stroke-primary fill-transparent stroke-[5]"
      d="M-5 39 28.5 32C57 25 114 11 171.2 5.7 228.3.3 285.7 3.7 342.8 22.7 400 41.7 457 76.3 514.2 95.8 571.3 115.3 628.7 119.7 685.8 103.8 743 88 800 52 857.2 41.7 914.3 31.3 971.7 46.7 1028.8 63.7 1086 80.7 1143 99.3 1171.5 108.7L1205 118"
    />
  </svg>
</div>
