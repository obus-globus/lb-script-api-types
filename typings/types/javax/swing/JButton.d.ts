import type { Component } from '../../java/awt/Component.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { AbstractButton } from '../../javax/swing/AbstractButton.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { Icon } from '../../javax/swing/Icon.d.ts'
export class JButton extends AbstractButton implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BORDER_PAINTED_CHANGED_PROPERTY: string;
    static BOTTOM: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER: number;
    static CENTER_ALIGNMENT: number;
    static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
    static DISABLED_ICON_CHANGED_PROPERTY: string;
    static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
    static EAST: number;
    static ERROR: number;
    static FOCUS_PAINTED_CHANGED_PROPERTY: string;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL: number;
    static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
    static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
    static ICON_CHANGED_PROPERTY: string;
    static LEADING: number;
    static LEFT: number;
    static LEFT_ALIGNMENT: number;
    static MARGIN_CHANGED_PROPERTY: string;
    static MNEMONIC_CHANGED_PROPERTY: string;
    static MODEL_CHANGED_PROPERTY: string;
    static NEXT: number;
    static NORTH: number;
    static NORTH_EAST: number;
    static NORTH_WEST: number;
    static PRESSED_ICON_CHANGED_PROPERTY: string;
    static PREVIOUS: number;
    static PROPERTIES: number;
    static RIGHT: number;
    static RIGHT_ALIGNMENT: number;
    static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
    static ROLLOVER_ICON_CHANGED_PROPERTY: string;
    static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
    static SELECTED_ICON_CHANGED_PROPERTY: string;
    static SOMEBITS: number;
    static SOUTH: number;
    static SOUTH_EAST: number;
    static SOUTH_WEST: number;
    static TEXT_CHANGED_PROPERTY: string;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP: number;
    static TOP_ALIGNMENT: number;
    static TRAILING: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
    static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
    static WEST: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: Action)
    constructor(arg0: Icon)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Icon)
    getAccessibleContext(): AccessibleContext;
    getUIClassID(): string;
    isDefaultButton(): boolean;
    isDefaultCapable(): boolean;
    paramString(): string;
    removeNotify(): void;
    setDefaultCapable(arg0: boolean): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}