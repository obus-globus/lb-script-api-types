import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { ComponentListener } from '../../java/awt/event/ComponentListener.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { JViewport$ViewListener } from '../../javax/swing/JViewport$ViewListener.d.ts'
import type { Timer } from '../../javax/swing/Timer.d.ts'
import type { Border } from '../../javax/swing/border/Border.d.ts'
import type { ChangeEvent } from '../../javax/swing/event/ChangeEvent.d.ts'
import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { ViewportUI } from '../../javax/swing/plaf/ViewportUI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JViewport extends JComponent implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BACKINGSTORE_SCROLL_MODE: number;
    static BLIT_SCROLL_MODE: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SIMPLE_SCROLL_MODE: number;
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
    // private backingStore: boolean;
    // private backingStoreImage: Image;
    // private changeEvent: ChangeEvent;
    // private hasHadValidView: boolean;
    // private inBlitPaint: boolean;
    // private isViewSizeSet: boolean;
    // private lastPaintPosition: Point;
    // private repaintAll: boolean;
    // private repaintTimer: Timer;
    readonly scrollMode: number;
    // private scrollUnderway: boolean;
    // private viewChanged: boolean;
    // private viewListener: ComponentListener;
    // private waitingForRepaint: boolean;
    addChangeListener(arg0: ChangeListener): void;
    addImpl(arg0: Component, arg1: Object, arg2: number): void;
    // private blitDoubleBuffered(arg0: JComponent, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
    // private canUseWindowBlitter(): boolean;
    computeBlit(arg0: number, arg1: number, arg2: Point, arg3: Point, arg4: Dimension, arg5: Rectangle): boolean;
    createLayoutManager(): LayoutManager;
    // private createRepaintTimer(): Timer;
    // private createScaledImage(arg0: number, arg1: number, arg2: number, arg3: number): Image;
    createViewListener(): JViewport$ViewListener;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    fireStateChanged(): void;
    // private flushViewDirtyRegion(arg0: Graphics, arg1: Rectangle): void;
    getAccessibleContext(): AccessibleContext;
    // private getBackingStoreGraphics(arg0: Graphics): Graphics;
    getChangeListeners(): ChangeListener[];
    getExtentSize(): Dimension;
    getInsets(): Insets;
    getInsets(arg0: Insets): Insets;
    getScrollMode(): number;
    getUI(): ViewportUI;
    getUIClassID(): string;
    getView(): Component;
    // private getViewLocation(): Point;
    getViewPosition(): Point;
    getViewRect(): Rectangle;
    getViewSize(): Dimension;
    isBackingStoreEnabled(): boolean;
    // private isBlitting(): boolean;
    // private isFPScale(): boolean;
    isOptimizedDrawingEnabled(): boolean;
    isPaintingOrigin(): boolean;
    // private needsRepaintAfterBlit(): boolean;
    paint(arg0: Graphics): void;
    // private paintViaBackingStore(arg0: Graphics): void;
    // private paintViaBackingStore(arg0: Graphics, arg1: Rectangle): void;
    // private paintView(arg0: Graphics): void;
    paramString(): string;
    // private positionAdjustment(arg0: number, arg1: number, arg2: number): number;
    remove(arg0: Component): void;
    removeChangeListener(arg0: ChangeListener): void;
    repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
    scrollRectToVisible(arg0: Rectangle): void;
    setBackingStoreEnabled(arg0: boolean): void;
    setBorder(arg0: Border): void;
    setExtentSize(arg0: Dimension): void;
    setScrollMode(arg0: number): void;
    setUI(arg0: ViewportUI): void;
    setView(arg0: Component): void;
    setViewPosition(arg0: Point): void;
    setViewSize(arg0: Dimension): void;
    toViewCoordinates(arg0: Dimension): Dimension;
    toViewCoordinates(arg0: Point): Point;
    updateUI(): void;
    // private validateView(): void;
    // private windowBlitPaint(arg0: Graphics): boolean;
}