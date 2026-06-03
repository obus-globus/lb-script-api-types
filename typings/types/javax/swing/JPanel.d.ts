import type { Component } from '../../java/awt/Component.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { ComponentUI } from '../../javax/swing/plaf/ComponentUI.d.ts'
import type { PanelUI } from '../../javax/swing/plaf/PanelUI.d.ts'
export class JPanel extends JComponent implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: LayoutManager)
    constructor(arg0: LayoutManager, arg1: boolean)
    constructor(arg0: boolean)
    getAccessibleContext(): AccessibleContext;
    getUI(): PanelUI;
    getUIClassID(): string;
    paramString(): string;
    setUI(arg0: ComponentUI): void;
    setUI(arg0: PanelUI): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}