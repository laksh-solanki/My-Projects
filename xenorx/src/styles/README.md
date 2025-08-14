# SCSS in this project

This project is set up to use SCSS for styling. Here's how you can use it:

## Global Styles

The main global stylesheet is located at `src/styles/main.scss`. You can add any global styles to this file.

## Vuetify SASS Variables

To override Vuetify's SASS variables, you can modify the `src/styles/settings.scss` file. This is the recommended way to customize the look and feel of your Vuetify components.

## Component Styles

To use SCSS in your Vue components, add the `lang="scss"` attribute to your `<style>` tags:

```vue
<style lang="scss" scoped>
  /* Your component-specific SCSS here */
</style>
```