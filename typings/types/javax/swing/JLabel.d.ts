import type { Component } from '../../java/awt/Component.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Icon } from '../../javax/swing/Icon.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { SwingConstants } from '../../javax/swing/SwingConstants.d.ts'
import type { ComponentUI } from '../../javax/swing/plaf/ComponentUI.d.ts'
import type { LabelUI } from '../../javax/swing/plaf/LabelUI.d.ts'
export class JLabel extends JComponent implements Accessible, SwingConstants {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER: number;
    static CENTER_ALIGNMENT: number;
    static EAST: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL: number;
    static LEADING: number;
    static LEFT: number;
    static LEFT_ALIGNMENT: number;
    static NEXT: number;
    static NORTH: number;
    static NORTH_EAST: number;
    static NORTH_WEST: number;
    static PREVIOUS: number;
    static PROPERTIES: number;
    static RIGHT: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static SOUTH: number;
    static SOUTH_EAST: number;
    static SOUTH_WEST: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP: number;
    static TOP_ALIGNMENT: number;
    static TRAILING: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static WEST: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: Icon)
    constructor(arg0: Icon, arg1: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Icon, arg2: number)
    constructor(arg0: string, arg1: number)
    // private defaultIcon: Icon;
    readonly disabledIcon: Icon;
    // private disabledIconSet: boolean;
    readonly horizontalAlignment: number;
    readonly horizontalTextPosition: number;
    readonly iconTextGap: number;
    labelFor: Component;
    // private mnemonic: number;
    // private mnemonicIndex: number;
    readonly text: string;
    readonly verticalAlignment: number;
    readonly verticalTextPosition: number;
    checkHorizontalKey(arg0: number, arg1: string): number;
    checkVerticalKey(arg0: number, arg1: string): number;
    getAccessibleContext(): AccessibleContext;
    getDisabledIcon(): Icon;
    getDisplayedMnemonic(): number;
    getDisplayedMnemonicIndex(): number;
    getHorizontalAlignment(): number;
    getHorizontalTextPosition(): number;
    getIcon(): Icon;
    getIconTextGap(): number;
    getLabelFor(): Component;
    getText(): string;
    getUI(): LabelUI;
    getUIClassID(): string;
    getVerticalAlignment(): number;
    getVerticalTextPosition(): number;
    imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    paramString(): string;
    setDisabledIcon(arg0: Icon): void;
    setDisplayedMnemonic(arg0: string): void;
    setDisplayedMnemonic(arg0: number): void;
    setDisplayedMnemonicIndex(arg0: number): void;
    setHorizontalAlignment(arg0: number): void;
    setHorizontalTextPosition(arg0: number): void;
    setIcon(arg0: Icon): void;
    setIconTextGap(arg0: number): void;
    setLabelFor(arg0: Component): void;
    setText(arg0: string): void;
    setUI(arg0: ComponentUI): void;
    setUI(arg0: LabelUI): void;
    setVerticalAlignment(arg0: number): void;
    setVerticalTextPosition(arg0: number): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}