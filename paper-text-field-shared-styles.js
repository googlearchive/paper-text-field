import '../paper-styles/color.js';
import '../paper-styles/typography.js';
import '../paper-styles/default-theme.js';
import '../iron-flex-layout/iron-flex-layout.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        width: 300px;
        max-width: 100%;
      }

      [hidden] {
        display: none !important;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: var(--paper-text-field-disabled-opacity, 0.33);
      }

      .container {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        display: inline-block;
        margin: 0;
        padding: 8px 0;
      }

      #input {
        @apply(--paper-font-subhead);
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        border: none;
        border-bottom: 1px solid var(--paper-text-field-color, --secondary-text-color);
        margin: 0;
        padding: 12px 0 0 0;
        width: 100%;
        text-align: inherit;
        line-height: inherit;
        background: 0 0;
        color: var(--paper-text-field-input-color, --primary-text-color);
      }

      /* We manage the focus UI separately */
      #input:focus {
        outline: none;
      }

      :host[no-float-label] #input {
        padding: 0;
      }

      label {
        @apply(--paper-font-common-nowrap);
        @apply(--paper-font-subhead);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 18px;

        pointer-events: none;

        display: block;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);

        color: var(--paper-text-field-color, --secondary-text-color);
      }

      :host([no-float-label]) label {
        top: 8px;
      }

      label.label-is-floating {
        font-size: 12px;
        top: 0px;
      }

      label.label-is-hidden {
        display: none;
      }

      :host([focused]) label.label-is-floating {
        color: var(--paper-text-field-focus-color, --primary-color);
      }

      /* Sets up the underline. It's initially hidden, and becomes visible when
        it's focused. */
      label:after {
        background-color: var(--paper-text-field-focus-color, --primary-color);
        bottom: 8px;
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 8px;
        z-index: 10;
      }

      :host([focused]) label:after {
        left: 0;
        visibility: visible;
        width: 100%;
      }

    </style>

</template></dom-module>`;

document.head.appendChild($_documentContainer);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
;
