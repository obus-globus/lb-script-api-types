import type { Adjustable } from '../../java/awt/Adjustable.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { ScrollPaneAdjustable } from '../../java/awt/ScrollPaneAdjustable.d.ts'
import type { MouseWheelEvent } from '../../java/awt/event/MouseWheelEvent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ScrollPane extends Container implements Accessible {
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
    static SCROLLBARS_ALWAYS: number;
    static SCROLLBARS_AS_NEEDED: number;
    static SCROLLBARS_NEVER: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    constructor()
    constructor(arg0: number)
    // private hAdjustable: ScrollPaneAdjustable;
    readonly scrollbarDisplayPolicy: number;
    // private vAdjustable: ScrollPaneAdjustable;
    readonly wheelScrollingEnabled: boolean;
    addImpl(arg0: Component, arg1: Object, arg2: number): void;
    addNotify(): void;
    // private addToPanel(arg0: Component, arg1: Object, arg2: number): void;
    autoProcessMouseWheel(arg0: MouseWheelEvent): void;
    calculateChildSize(): Dimension;
    constructComponentName(): string;
    doLayout(): void;
    eventTypeEnabled(arg0: number): boolean;
    getAccessibleContext(): AccessibleContext;
    getHAdjustable(): Adjustable;
    getHScrollbarHeight(): number;
    getScrollPosition(): Point;
    getScrollbarDisplayPolicy(): number;
    getVAdjustable(): Adjustable;
    getVScrollbarWidth(): number;
    getViewportSize(): Dimension;
    isWheelScrollingEnabled(): boolean;
    layout(): void;
    paramString(): string;
    printComponents(arg0: Graphics): void;
    processMouseWheelEvent(arg0: MouseWheelEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    setLayout(arg0: LayoutManager): void;
    setScrollPosition(arg0: Point): void;
    setScrollPosition(arg0: number, arg1: number): void;
    setWheelScrollingEnabled(arg0: boolean): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}