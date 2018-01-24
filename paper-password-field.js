import '../polymer/polymer.js';
import './paper-text-field-shared-styles.js';
import './paper-text-field-behavior.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-password-field">
  <!-- TODO(noms): When inheritance is available, inherit the template from
    a base text-field -->
  <template>
    <style include="paper-text-field-shared-styles"></style>

    <div class="container">
      <label hidden\$="[[!label]]" class\$="[[_computeLabelClass(noFloatLabel,alwaysFloatLabel,hasContent)]]">[[label]]</label>
      <input id="input" type="password" tabindex="-1"></div>
    
    
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
Material design: [Text fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-text-field>` is a single-line text field with Material Design styling.
Unlike `<paper-input>` it does not contain a native `<input>` field, so it cannot
be used in native forms, or with any of the native `<input>` `type=...` attributes.

    <paper-text-field label="Input label"></paper-text-field>

See `Polymer.PaperTextFieldBehavior` for more API docs.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----
`--paper-text-field-color` | Label and underline color when the focus is not focused | `--secondary-text-color`
`--paper-text-field-focus-color` | Label and underline color when the input is focused | `--primary-color`
`--paper-text-field-input-color` | Input foreground text color | `--primary-text-color`
`--paper-text-field-disabled-opacity` | Opacity of the element when disabled | `0.33`
`--paper-text-field-disabled-underline` | Border style of the underline when disabled | `1px dashed`

@group Paper Elements
@element paper-text-field
@hero hero.svg
@demo demo/index.html
*/
/* TODO(noms): When inheritance is available, inherit the template from
    a base text-field */
Polymer({
  is: 'paper-password-field',

  hostAttributes: {
    'tabindex': 0,
    'role': 'textbox'
  },

  behaviors: [
    Polymer.PaperTextFieldBehavior
  ],

  _setUpListeners: function() {
    this.inputElement.addEventListener('input', this._onInput.bind(this));
  },

  set inputElementValue(value) {
    this.inputElement.value = value;
  },

  get inputElementValue() {
    return this.inputElement.value;
  },
});
