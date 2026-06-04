import type { Color } from '../../java/awt/Color.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { DropMode } from '../../javax/swing/DropMode.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { JList$DropLocation } from '../../javax/swing/JList$DropLocation.d.ts'
import type { ListCellRenderer } from '../../javax/swing/ListCellRenderer.d.ts'
import type { ListModel } from '../../javax/swing/ListModel.d.ts'
import type { ListSelectionModel } from '../../javax/swing/ListSelectionModel.d.ts'
import type { Scrollable } from '../../javax/swing/Scrollable.d.ts'
import type { TransferHandler$DropLocation } from '../../javax/swing/TransferHandler$DropLocation.d.ts'
import type { ListSelectionListener } from '../../javax/swing/event/ListSelectionListener.d.ts'
import type { ComponentUI } from '../../javax/swing/plaf/ComponentUI.d.ts'
import type { ListUI } from '../../javax/swing/plaf/ListUI.d.ts'
import type { Position$Bias } from '../../javax/swing/text/Position$Bias.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JList<E extends Object | number | string | boolean> extends JComponent implements Accessible, Scrollable {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL_WRAP: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static VERTICAL_WRAP: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: E[])
    constructor(arg0: ListModel<E>)
    constructor(arg0: E[])
    readonly cellRenderer: ListCellRenderer<E>;
    // private dataModel: ListModel<E>;
    readonly dragEnabled: boolean;
    readonly dropLocation: JList$DropLocation;
    readonly dropMode: DropMode;
    readonly fixedCellHeight: number;
    readonly fixedCellWidth: number;
    // private horizontalScrollIncrement: number;
    readonly layoutOrientation: number;
    readonly prototypeCellValue: E;
    readonly selectionBackground: Color;
    readonly selectionForeground: Color;
    // private selectionListener: ListSelectionListener;
    readonly selectionModel: ListSelectionModel;
    // private updateInProgress: boolean;
    readonly visibleRowCount: number;
    addListSelectionListener(arg0: ListSelectionListener): void;
    addSelectionInterval(arg0: number, arg1: number): void;
    // private checkScrollableParameters(arg0: Rectangle, arg1: number): void;
    clearSelection(): void;
    createSelectionModel(): ListSelectionModel;
    dropLocationForPoint(arg0: Point): JList$DropLocation;
    ensureIndexIsVisible(arg0: number): void;
    fireSelectionValueChanged(arg0: number, arg1: number, arg2: boolean): void;
    getAccessibleContext(): AccessibleContext;
    getAnchorSelectionIndex(): number;
    getCellBounds(arg0: number, arg1: number): Rectangle;
    getCellRenderer(): ListCellRenderer<E>;
    getDragEnabled(): boolean;
    getDropLocation(): JList$DropLocation;
    getDropMode(): DropMode;
    getFirstVisibleIndex(): number;
    getFixedCellHeight(): number;
    getFixedCellWidth(): number;
    getLastVisibleIndex(): number;
    getLayoutOrientation(): number;
    getLeadSelectionIndex(): number;
    getListSelectionListeners(): ListSelectionListener[];
    getMaxSelectionIndex(): number;
    getMinSelectionIndex(): number;
    getModel(): ListModel<E>;
    getNextMatch(arg0: string, arg1: number, arg2: Position$Bias): number;
    getPreferredScrollableViewportSize(): Dimension;
    getPrototypeCellValue(): E;
    getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getScrollableTracksViewportHeight(): boolean;
    getScrollableTracksViewportWidth(): boolean;
    getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getSelectedIndex(): number;
    getSelectedIndices(): number[];
    getSelectedValue(): E;
    getSelectedValues(): Object[];
    getSelectedValuesList(): E[];
    getSelectionBackground(): Color;
    getSelectionForeground(): Color;
    getSelectionMode(): number;
    getSelectionModel(): ListSelectionModel;
    getToolTipText(): string;
    getToolTipText(arg0: MouseEvent): string;
    getUI(): ListUI;
    getUIClassID(): string;
    getValueIsAdjusting(): boolean;
    getVisibleRowCount(): number;
    indexToLocation(arg0: number): Point;
    isSelectedIndex(arg0: number): boolean;
    isSelectionEmpty(): boolean;
    locationToIndex(arg0: Point): number;
    paramString(): string;
    removeListSelectionListener(arg0: ListSelectionListener): void;
    removeSelectionInterval(arg0: number, arg1: number): void;
    setCellRenderer(arg0: ListCellRenderer<E>): void;
    setDragEnabled(arg0: boolean): void;
    setDropLocation(arg0: TransferHandler$DropLocation, arg1: Object, arg2: boolean): Object;
    setDropMode(arg0: DropMode): void;
    setFixedCellHeight(arg0: number): void;
    setFixedCellWidth(arg0: number): void;
    setLayoutOrientation(arg0: number): void;
    setListData(arg0: E[]): void;
    setModel(arg0: ListModel<E>): void;
    setPrototypeCellValue(arg0: E): void;
    setSelectedIndex(arg0: number): void;
    setSelectedIndices(arg0: number[]): void;
    setSelectedValue(arg0: Object, arg1: boolean): void;
    setSelectionBackground(arg0: Color): void;
    setSelectionForeground(arg0: Color): void;
    setSelectionInterval(arg0: number, arg1: number): void;
    setSelectionMode(arg0: number): void;
    setSelectionModel(arg0: ListSelectionModel): void;
    setUI(arg0: ComponentUI): void;
    setUI(arg0: ListUI): void;
    setValueIsAdjusting(arg0: boolean): void;
    setVisibleRowCount(arg0: number): void;
    // private updateFixedCellSize(): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}