import '../polymer/polymer.js';
import '../iron-a11y-keys-behavior/iron-a11y-keys-behavior.js';
import '../iron-behaviors/iron-control-state.js';
/**
 * Use `Polymer.PaperTextFieldBehavior` to implement a paper-text-field like
 * input, that controls a floating UI label.

 * @polymerBehavior Polymer.PaperTextFieldBehavior
 */

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer.PaperTextFieldBehaviorImpl = {
  properties: {
    /**
     * The value for this input.
     */
    value: {
      notify: true,
      observer: '_valueChanged',
      type: String
    },

    /**
     * The label for this input.
     */
    label: {
      type: String
    },

    /**
     * Set to true to disable the floating label.
     */
    noFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to always float the label.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * True when the input has
     */
    hasContent: {
      type: Boolean,
      readOnly: true
    }
  },

  /**
   * Returns a reference to the input element.
   */
  get inputElement() {
    return this.$.input;
  },

  /**
   * Sets the value of the input element. Assumes the element is a
   * <div contenteditable>; if it isn't, override this method in the element
   * implementing this behavior.
   */
  set inputElementValue(value) {
    this.inputElement.textContent = value;
  },

  /**
   * Gets the value of the input element. Assumes the element is a
   * <div contenteditable>; if it isn't, override this method in the element
   * implementing this behavior.
   */
  get inputElementValue() {
    return this.inputElement.textContent;
  },

  listeners: {
    'focus': '_onFocus'
  },

  keyBindings: {
    'shift+tab:keydown': '_onShiftTab'
  },

  attached: function() {
    // Float the label correctly if there's an initial value.
    if (this.value || this.alwaysFloatLabel)
      this._onInput();

    if (this._setUpListeners)
      this._setUpListeners();
  },

  /**
   * Called when the element is updated because of user interaction.
   */
  _onInput: function() {
    this.value = this.inputElementValue;

    if (this.value || this.value === 0 || this.value === false) {
      this._setHasContent(true);
    } else {
      this._setHasContent(false);
    }
  },

  /**
   * Called when the element is focused. Forwards focus to the input element.
   */
  _onFocus: function() {
    if (!this.disabled && !this.__shiftTabPressed){
      this.inputElement.focus();
    }
  },

  /**
   * Called when a shift+tab keypress is detected.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTab: function(event) {
    var oldTabIndex = this.getAttribute('tabindex');
    this.__shiftTabPressed = true;
    this.setAttribute('tabindex', '-1');
    this.async(function() {
      this.setAttribute('tabindex', oldTabIndex);
      this.__shiftTabPressed = false;
    }, 1);
  },

  /**
   * Called when the element is programmatically updated.
   */
  _valueChanged: function() {
    // Only update if it's actually different.
    if (this.inputElement && this.inputElementValue !== this.value) {
      this.inputElementValue = this.value;
    }
  },

  // TODO(noms):  When inheritance is available, investigate if these could
  // become private methods.
  _computeLabelClass: function(noFloatLabel, alwaysFloatLabel, hasContent) {
    var cls = '';
    if (noFloatLabel === true) {
      return hasContent ? 'label-is-hidden' : '';
    }

    if (hasContent || alwaysFloatLabel === true) {
      cls += ' label-is-floating';
    }
    return cls;
  },

  _computeUnderlineClass: function(focused) {
    return focused ? 'is-highlighted' : '';
  }
};

Polymer.PaperTextFieldBehavior = [Polymer.IronControlState,
                                  Polymer.IronA11yKeysBehavior,
                                  Polymer.PaperTextFieldBehaviorImpl];
