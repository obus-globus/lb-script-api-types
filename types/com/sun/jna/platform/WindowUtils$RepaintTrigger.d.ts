import type { WindowUtils$RepaintTrigger$Listener } from '../../../../com/sun/jna/platform/WindowUtils$RepaintTrigger$Listener.d.ts'
import type { Component } from '../../../../java/awt/Component.d.ts'
import type { Graphics } from '../../../../java/awt/Graphics.d.ts'
import type { Rectangle } from '../../../../java/awt/Rectangle.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { JComponent } from '../../../../javax/swing/JComponent.d.ts'
export class WindowUtils$RepaintTrigger extends JComponent {
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
    constructor(arg0: JComponent)
    // private content: JComponent;
    // private dirty: Rectangle;
    // private listener: WindowUtils$RepaintTrigger$Listener;
    addNotify(): void;
    createListener(): WindowUtils$RepaintTrigger$Listener;
    paintComponent(arg0: Graphics): void;
    removeNotify(): void;
}