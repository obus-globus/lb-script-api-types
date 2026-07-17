import type { JavaMap } from '../../JavaMap.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JLayeredPane extends JComponent implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static DEFAULT_LAYER: number;
    static DRAG_LAYER: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static FRAME_CONTENT_LAYER: number;
    static HEIGHT: number;
    static LAYER_PROPERTY: string;
    static LEFT_ALIGNMENT: number;
    static MODAL_LAYER: number;
    static PALETTE_LAYER: number;
    static POPUP_LAYER: number;
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
    static getLayer(paramarg0: JComponent): number;
    static getLayeredPaneAbove(paramarg0: Component): JLayeredPane;
    static isLightweightComponent(paramarg0: Component): boolean;
    static putLayer(paramarg0: JComponent, paramarg1: number): void;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    // private componentToLayer: JavaMap<Component, number>;
    // private optimizedDrawingPossible: boolean;
    addImpl(arg0: Component, arg1: Object, arg2: number): void;
    getAccessibleContext(): AccessibleContext;
    getComponentCountInLayer(arg0: number): number;
    getComponentToLayer(): JavaMap<Component, number>;
    getComponentsInLayer(arg0: number): Component[];
    getIndexOf(arg0: Component): number;
    getLayer(arg0: Component): number;
    getObjectForLayer(arg0: number): number;
    getPosition(arg0: Component): number;
    highestLayer(): number;
    // private insertIndexForLayer(arg0: Component, arg1: number, arg2: number): number;
    insertIndexForLayer(arg0: number, arg1: number): number;
    isOptimizedDrawingEnabled(): boolean;
    lowestLayer(): number;
    moveToBack(arg0: Component): void;
    moveToFront(arg0: Component): void;
    paint(arg0: Graphics): void;
    paramString(): string;
    remove(arg0: Component): void;
    remove(arg0: MenuComponent): void;
    remove(arg0: number): void;
    removeAll(): void;
    setLayer(arg0: Component, arg1: number): void;
    setLayer(arg0: Component, arg1: number, arg2: number): void;
    setPosition(arg0: Component, arg1: number): void;
    // private validateOptimizedDrawing(): void;
}