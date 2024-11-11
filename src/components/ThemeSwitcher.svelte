<script>
  $: isLightMode = document.querySelector("html").classList.contains("light");
  $: iconName = isLightMode ? "sunny" : "moon";

  const switchThemeMode = () => {
    let html = document.querySelector("html");

    if (isLightMode) {
      html.classList.remove("light");
      iconName = "moon";
      isLightMode = !isLightMode;
      return;
    }

    html?.classList.add("light");
    iconName = "sunny";
    isLightMode = !isLightMode;
  };
</script>

<button on:click={switchThemeMode}>
  <ion-icon
    name={`${iconName}-outline`}
    class:sunny={isLightMode}
    aria-label="Theme switcher"
  />
</button>

<style lang="scss">
  $moon-color: #f6f1d5;
  $sun-color: #f2f27a;

  button {
    border: 0;
    background-color: transparent;
  }

  ion-icon {
    font-size: 32px;
    color: $moon-color;

    &.sunny {
      color: $sun-color;
    }
  }
</style>
