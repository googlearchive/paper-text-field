
<!---

This README is automatically generated from the comments in these files:
paper-password-field.html  paper-text-field-behavior.html  paper-text-field.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

The bot does some handling of markdown. Please file a bug if it does the wrong
thing! https://github.com/PolymerLabs/tedium/issues

-->

[![Build status](https://travis-ci.org/PolymerElements/paper-text-field.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-text-field)

_[Demo and API docs](https://elements.polymer-project.org/elements/paper-text-field)_


##&lt;paper-text-field&gt;

Material design: [Text fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-text-field>` is a single-line text field with Material Design styling.
Unlike `<paper-input>` it does not contain a native `<input>` field, so it cannot
be used in native forms, or with any of the native `<input>` `type=...` attributes.

```html
<paper-text-field label="Input label"></paper-text-field>
```

See `Polymer.PaperTextFieldBehavior` for more API docs.

### Styling

The following custom properties are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--paper-text-field-color` | Label and underline color when the focus is not focused | `--secondary-text-color` |
| `--paper-text-field-focus-color` | Label and underline color when the input is focused | `--primary-color` |
| `--paper-text-field-input-color` | Input foreground text color | `--primary-text-color` |
| `--paper-text-field-disabled-opacity` | Opacity of the element when disabled | `0.33` |
| `--paper-text-field-disabled-underline` | Border style of the underline when disabled | `1px dashed` |



##&lt;paper-password-field&gt;

Material design: [Text fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-text-field>` is a single-line text field with Material Design styling.
Unlike `<paper-input>` it does not contain a native `<input>` field, so it cannot
be used in native forms, or with any of the native `<input>` `type=...` attributes.

```html
<paper-text-field label="Input label"></paper-text-field>
```

See `Polymer.PaperTextFieldBehavior` for more API docs.

### Styling

The following custom properties are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--paper-text-field-color` | Label and underline color when the focus is not focused | `--secondary-text-color` |
| `--paper-text-field-focus-color` | Label and underline color when the input is focused | `--primary-color` |
| `--paper-text-field-input-color` | Input foreground text color | `--primary-text-color` |
| `--paper-text-field-disabled-opacity` | Opacity of the element when disabled | `0.33` |
| `--paper-text-field-disabled-underline` | Border style of the underline when disabled | `1px dashed` |



##Polymer.PaperTextFieldBehavior

Use `Polymer.PaperTextFieldBehavior` to implement a paper-text-field like
input, that controls a floating UI label.


