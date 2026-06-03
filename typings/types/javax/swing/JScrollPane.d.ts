import type { Component } from '../../java/awt/Component.d.ts'
import type { ComponentOrientation } from '../../java/awt/ComponentOrientation.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { JScrollBar } from '../../javax/swing/JScrollBar.d.ts'
import type { JViewport } from '../../javax/swing/JViewport.d.ts'
import type { ScrollPaneConstants } from '../../javax/swing/ScrollPaneConstants.d.ts'
import type { Border } from '../../javax/swing/border/Border.d.ts'
import type { ComponentUI } from '../../javax/swing/plaf/ComponentUI.d.ts'
import type { ScrollPaneUI } from '../../javax/swing/plaf/ScrollPaneUI.d.ts'
export class JScrollPane extends JComponent implements Accessible, ScrollPaneConstants {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static COLUMN_HEADER: string;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL_SCROLLBAR: string;
    static HORIZONTAL_SCROLLBAR_ALWAYS: number;
    static HORIZONTAL_SCROLLBAR_AS_NEEDED: number;
    static HORIZONTAL_SCROLLBAR_NEVER: number;
    static HORIZONTAL_SCROLLBAR_POLICY: string;
    static LEFT_ALIGNMENT: number;
    static LOWER_LEADING_CORNER: string;
    static LOWER_LEFT_CORNER: string;
    static LOWER_RIGHT_CORNER: string;
    static LOWER_TRAILING_CORNER: string;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static ROW_HEADER: string;
    static SOMEBITS: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static UPPER_LEADING_CORNER: string;
    static UPPER_LEFT_CORNER: string;
    static UPPER_RIGHT_CORNER: string;
    static UPPER_TRAILING_CORNER: string;
    static VERTICAL_SCROLLBAR: string;
    static VERTICAL_SCROLLBAR_ALWAYS: number;
    static VERTICAL_SCROLLBAR_AS_NEEDED: number;
    static VERTICAL_SCROLLBAR_NEVER: number;
    static VERTICAL_SCROLLBAR_POLICY: string;
    static VIEWPORT: string;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: Component)
    constructor(arg0: Component, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number)
    columnHeader: JViewport;
    horizontalScrollBar: JScrollBar;
    horizontalScrollBarPolicy: number;
    // private lowerLeft: Component;
    // private lowerRight: Component;
    rowHeader: JViewport;
    // private upperLeft: Component;
    // private upperRight: Component;
    verticalScrollBar: JScrollBar;
    verticalScrollBarPolicy: number;
    viewport: JViewport;
    readonly viewportBorder: Border;
    // private wheelScrollState: boolean;
    createHorizontalScrollBar(): JScrollBar;
    createVerticalScrollBar(): JScrollBar;
    createViewport(): JViewport;
    getAccessibleContext(): AccessibleContext;
    getColumnHeader(): JViewport;
    getCorner(arg0: string): Component;
    getHorizontalScrollBar(): JScrollBar;
    getHorizontalScrollBarPolicy(): number;
    getRowHeader(): JViewport;
    getUI(): ScrollPaneUI;
    getUIClassID(): string;
    getVerticalScrollBar(): JScrollBar;
    getVerticalScrollBarPolicy(): number;
    getViewport(): JViewport;
    getViewportBorder(): Border;
    getViewportBorderBounds(): Rectangle;
    isValidateRoot(): boolean;
    isWheelScrollingEnabled(): boolean;
    paramString(): string;
    setColumnHeader(arg0: JViewport): void;
    setColumnHeaderView(arg0: Component): void;
    setComponentOrientation(arg0: ComponentOrientation): void;
    setCorner(arg0: string, arg1: Component): void;
    setHorizontalScrollBar(arg0: JScrollBar): void;
    setHorizontalScrollBarPolicy(arg0: number): void;
    setLayout(arg0: LayoutManager): void;
    setRowHeader(arg0: JViewport): void;
    setRowHeaderView(arg0: Component): void;
    setUI(arg0: ComponentUI): void;
    setUI(arg0: ScrollPaneUI): void;
    setVerticalScrollBar(arg0: JScrollBar): void;
    setVerticalScrollBarPolicy(arg0: number): void;
    setViewport(arg0: JViewport): void;
    setViewportBorder(arg0: Border): void;
    setViewportView(arg0: Component): void;
    setWheelScrollingEnabled(arg0: boolean): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}