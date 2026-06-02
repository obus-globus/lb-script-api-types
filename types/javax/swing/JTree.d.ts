import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { DropMode } from '../../javax/swing/DropMode.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { JTree$DropLocation } from '../../javax/swing/JTree$DropLocation.d.ts'
import type { JTree$TreeSelectionRedirector } from '../../javax/swing/JTree$TreeSelectionRedirector.d.ts'
import type { JTree$TreeTimer } from '../../javax/swing/JTree$TreeTimer.d.ts'
import type { Scrollable } from '../../javax/swing/Scrollable.d.ts'
import type { TransferHandler$DropLocation } from '../../javax/swing/TransferHandler$DropLocation.d.ts'
import type { TreeExpansionListener } from '../../javax/swing/event/TreeExpansionListener.d.ts'
import type { TreeModelEvent } from '../../javax/swing/event/TreeModelEvent.d.ts'
import type { TreeModelListener } from '../../javax/swing/event/TreeModelListener.d.ts'
import type { TreeSelectionEvent } from '../../javax/swing/event/TreeSelectionEvent.d.ts'
import type { TreeSelectionListener } from '../../javax/swing/event/TreeSelectionListener.d.ts'
import type { TreeWillExpandListener } from '../../javax/swing/event/TreeWillExpandListener.d.ts'
import type { TreeUI } from '../../javax/swing/plaf/TreeUI.d.ts'
import type { Position$Bias } from '../../javax/swing/text/Position$Bias.d.ts'
import type { TreeCellEditor } from '../../javax/swing/tree/TreeCellEditor.d.ts'
import type { TreeCellRenderer } from '../../javax/swing/tree/TreeCellRenderer.d.ts'
import type { TreeModel } from '../../javax/swing/tree/TreeModel.d.ts'
import type { TreeNode } from '../../javax/swing/tree/TreeNode.d.ts'
import type { TreePath } from '../../javax/swing/tree/TreePath.d.ts'
import type { TreeSelectionModel } from '../../javax/swing/tree/TreeSelectionModel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JTree extends JComponent implements Accessible, Scrollable {
    static ABORT: number;
    static ALLBITS: number;
    static ANCHOR_SELECTION_PATH_PROPERTY: string;
    static BOTTOM_ALIGNMENT: number;
    static CELL_EDITOR_PROPERTY: string;
    static CELL_RENDERER_PROPERTY: string;
    static CENTER_ALIGNMENT: number;
    static EDITABLE_PROPERTY: string;
    static ERROR: number;
    static EXPANDS_SELECTED_PATHS_PROPERTY: string;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static INVOKES_STOP_CELL_EDITING_PROPERTY: string;
    static LARGE_MODEL_PROPERTY: string;
    static LEAD_SELECTION_PATH_PROPERTY: string;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static ROOT_VISIBLE_PROPERTY: string;
    static ROW_HEIGHT_PROPERTY: string;
    static SCROLLS_ON_EXPAND_PROPERTY: string;
    static SELECTION_MODEL_PROPERTY: string;
    static SHOWS_ROOT_HANDLES_PROPERTY: string;
    static SOMEBITS: number;
    static TOGGLE_CLICK_COUNT_PROPERTY: string;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static TREE_MODEL_PROPERTY: string;
    static UNDEFINED_CONDITION: number;
    static VISIBLE_ROW_COUNT_PROPERTY: string;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: Map<Object | null, Object | null>)
    constructor(arg0: (Object | null)[])
    constructor(arg0: TreeModel)
    constructor(arg0: TreeNode)
    constructor(arg0: TreeNode, arg1: boolean)
    constructor(arg0: Object[])
    // private anchorPath: TreePath;
    cellEditor: TreeCellEditor;
    cellRenderer: TreeCellRenderer;
    readonly dragEnabled: boolean;
    readonly dropLocation: JTree$DropLocation;
    readonly dropMode: DropMode;
    // private dropTimer: JTree$TreeTimer;
    editable: boolean;
    // private expandRow: number;
    // private expandedStack: TreePath[][];
    // private expandedState: Map<TreePath, boolean>;
    readonly expandsSelectedPaths: boolean;
    invokesStopCellEditing: boolean;
    largeModel: boolean;
    // private leadPath: TreePath;
    rootVisible: boolean;
    rowHeight: number;
    // private rowHeightSet: boolean;
    scrollsOnExpand: boolean;
    // private scrollsOnExpandSet: boolean;
    selectionModel: TreeSelectionModel;
    // private selectionRedirector: JTree$TreeSelectionRedirector;
    // private settingUI: boolean;
    showsRootHandles: boolean;
    // private showsRootHandlesSet: boolean;
    toggleClickCount: number;
    // private treeModel: TreeModel;
    // private treeModelListener: TreeModelListener;
    // private uiTreeExpansionListener: TreeExpansionListener;
    // private updateInProgress: boolean;
    visibleRowCount: number;
    addSelectionInterval(arg0: number, arg1: number): void;
    addSelectionPath(arg0: TreePath): void;
    addSelectionPaths(arg0: TreePath[]): void;
    addSelectionRow(arg0: number): void;
    addSelectionRows(arg0: number[]): void;
    addTreeExpansionListener(arg0: TreeExpansionListener): void;
    addTreeSelectionListener(arg0: TreeSelectionListener): void;
    addTreeWillExpandListener(arg0: TreeWillExpandListener): void;
    // private cancelDropTimer(): void;
    cancelEditing(): void;
    clearSelection(): void;
    clearToggledPaths(): void;
    collapsePath(arg0: TreePath): void;
    collapseRow(arg0: number): void;
    convertValueToText(arg0: Object, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: boolean): string;
    createTreeModelListener(): TreeModelListener;
    dndDone(): void;
    dropLocationForPoint(arg0: Point): JTree$DropLocation;
    expandPath(arg0: TreePath): void;
    // private expandRoot(): void;
    expandRow(arg0: number): void;
    fireTreeCollapsed(arg0: TreePath): void;
    fireTreeExpanded(arg0: TreePath): void;
    fireTreeWillCollapse(arg0: TreePath): void;
    fireTreeWillExpand(arg0: TreePath): void;
    fireValueChanged(arg0: TreeSelectionEvent): void;
    getAccessibleContext(): AccessibleContext;
    getAnchorSelectionPath(): TreePath;
    // private getArchivableExpandedState(): Object;
    getCellEditor(): TreeCellEditor;
    getCellRenderer(): TreeCellRenderer;
    getClosestPathForLocation(arg0: number, arg1: number): TreePath;
    getClosestRowForLocation(arg0: number, arg1: number): number;
    // private getDescendantSelectedPaths(arg0: TreePath, arg1: boolean): TreePath[];
    getDescendantToggledPaths(arg0: TreePath): Enumeration<TreePath>;
    getDragEnabled(): boolean;
    getDropLocation(): JTree$DropLocation;
    getDropMode(): DropMode;
    getEditingPath(): TreePath;
    getExpandedDescendants(arg0: TreePath): Enumeration<TreePath>;
    getExpandsSelectedPaths(): boolean;
    getInvokesStopCellEditing(): boolean;
    getLastSelectedPathComponent(): Object;
    getLeadSelectionPath(): TreePath;
    getLeadSelectionRow(): number;
    getMaxSelectionRow(): number;
    getMinSelectionRow(): number;
    getModel(): TreeModel;
    // private getModelIndexsForPath(arg0: TreePath): number[];
    getNextMatch(arg0: string, arg1: number, arg2: Position$Bias): TreePath;
    getPathBetweenRows(arg0: number, arg1: number): TreePath[];
    getPathBounds(arg0: TreePath): Rectangle;
    // private getPathForIndexs(arg0: number[]): TreePath;
    getPathForLocation(arg0: number, arg1: number): TreePath;
    getPathForRow(arg0: number): TreePath;
    getPreferredScrollableViewportSize(): Dimension;
    getRowBounds(arg0: number): Rectangle;
    getRowCount(): number;
    getRowForLocation(arg0: number, arg1: number): number;
    getRowForPath(arg0: TreePath): number;
    getRowHeight(): number;
    getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getScrollableTracksViewportHeight(): boolean;
    getScrollableTracksViewportWidth(): boolean;
    getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getScrollsOnExpand(): boolean;
    getSelectionCount(): number;
    getSelectionModel(): TreeSelectionModel;
    getSelectionPath(): TreePath;
    getSelectionPaths(): TreePath[];
    getSelectionRows(): number[];
    getShowsRootHandles(): boolean;
    getToggleClickCount(): number;
    getToolTipText(arg0: MouseEvent): string;
    getTreeExpansionListeners(): TreeExpansionListener[];
    getTreeSelectionListeners(): TreeSelectionListener[];
    getTreeWillExpandListeners(): TreeWillExpandListener[];
    getUI(): TreeUI;
    getUIClassID(): string;
    getVisibleRowCount(): number;
    hasBeenExpanded(arg0: TreePath): boolean;
    isCollapsed(arg0: TreePath): boolean;
    isCollapsed(arg0: number): boolean;
    isEditable(): boolean;
    isEditing(): boolean;
    isExpanded(arg0: TreePath): boolean;
    isExpanded(arg0: number): boolean;
    isFixedRowHeight(): boolean;
    isLargeModel(): boolean;
    isPathEditable(arg0: TreePath): boolean;
    isPathSelected(arg0: TreePath): boolean;
    isRootVisible(): boolean;
    isRowSelected(arg0: number): boolean;
    isSelectionEmpty(): boolean;
    isVisible(arg0: TreePath): boolean;
    makeVisible(arg0: TreePath): void;
    paramString(): string;
    // private readObject(arg0: ObjectInputStream): void;
    removeDescendantSelectedPaths(arg0: TreeModelEvent): void;
    removeDescendantSelectedPaths(arg0: TreePath, arg1: boolean): boolean;
    removeDescendantToggledPaths(arg0: Enumeration<TreePath>): void;
    removeSelectionInterval(arg0: number, arg1: number): void;
    removeSelectionPath(arg0: TreePath): void;
    removeSelectionPaths(arg0: TreePath[]): void;
    removeSelectionRow(arg0: number): void;
    removeSelectionRows(arg0: number[]): void;
    removeTreeExpansionListener(arg0: TreeExpansionListener): void;
    removeTreeSelectionListener(arg0: TreeSelectionListener): void;
    removeTreeWillExpandListener(arg0: TreeWillExpandListener): void;
    scrollPathToVisible(arg0: TreePath): void;
    scrollRowToVisible(arg0: number): void;
    setAnchorSelectionPath(arg0: TreePath): void;
    setCellEditor(arg0: TreeCellEditor): void;
    setCellRenderer(arg0: TreeCellRenderer): void;
    setDragEnabled(arg0: boolean): void;
    setDropLocation(arg0: TransferHandler$DropLocation, arg1: Object, arg2: boolean): Object;
    setDropMode(arg0: DropMode): void;
    setEditable(arg0: boolean): void;
    setExpandedState(arg0: TreePath, arg1: boolean): void;
    setExpandsSelectedPaths(arg0: boolean): void;
    setInvokesStopCellEditing(arg0: boolean): void;
    setLargeModel(arg0: boolean): void;
    setLeadSelectionPath(arg0: TreePath): void;
    setModel(arg0: TreeModel): void;
    setRootVisible(arg0: boolean): void;
    setRowHeight(arg0: number): void;
    setScrollsOnExpand(arg0: boolean): void;
    setSelectionInterval(arg0: number, arg1: number): void;
    setSelectionModel(arg0: TreeSelectionModel): void;
    setSelectionPath(arg0: TreePath): void;
    setSelectionPaths(arg0: TreePath[]): void;
    setSelectionRow(arg0: number): void;
    setSelectionRows(arg0: number[]): void;
    setShowsRootHandles(arg0: boolean): void;
    setToggleClickCount(arg0: number): void;
    setUI(arg0: TreeUI): void;
    setUIProperty(arg0: string, arg1: Object): void;
    setVisibleRowCount(arg0: number): void;
    // private startDropTimer(): void;
    startEditingAtPath(arg0: TreePath): void;
    stopEditing(): boolean;
    treeDidChange(): void;
    // private unarchiveExpandedState(arg0: Object): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}