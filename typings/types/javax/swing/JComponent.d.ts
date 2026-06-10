import type { AWTKeyStroke } from '../../java/awt/AWTKeyStroke.d.ts'
import type { Color } from '../../java/awt/Color.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Component$BaselineResizeBehavior } from '../../java/awt/Component$BaselineResizeBehavior.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { FontMetrics } from '../../java/awt/FontMetrics.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { FocusEvent$Cause } from '../../java/awt/event/FocusEvent$Cause.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { VetoableChangeListener } from '../../java/beans/VetoableChangeListener.d.ts'
import type { VetoableChangeSupport } from '../../java/beans/VetoableChangeSupport.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { AtomicBoolean } from '../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { ActionMap } from '../../javax/swing/ActionMap.d.ts'
import type { AncestorNotifier } from '../../javax/swing/AncestorNotifier.d.ts'
import type { ArrayTable } from '../../javax/swing/ArrayTable.d.ts'
import type { ComponentInputMap } from '../../javax/swing/ComponentInputMap.d.ts'
import type { InputMap } from '../../javax/swing/InputMap.d.ts'
import type { InputVerifier } from '../../javax/swing/InputVerifier.d.ts'
import type { JPopupMenu } from '../../javax/swing/JPopupMenu.d.ts'
import type { JRootPane } from '../../javax/swing/JRootPane.d.ts'
import type { JToolTip } from '../../javax/swing/JToolTip.d.ts'
import type { KeyStroke } from '../../javax/swing/KeyStroke.d.ts'
import type { TransferHandler } from '../../javax/swing/TransferHandler.d.ts'
import type { TransferHandler$DropLocation } from '../../javax/swing/TransferHandler$DropLocation.d.ts'
import type { TransferHandler$HasGetTransferHandler } from '../../javax/swing/TransferHandler$HasGetTransferHandler.d.ts'
import type { Border } from '../../javax/swing/border/Border.d.ts'
import type { AncestorListener } from '../../javax/swing/event/AncestorListener.d.ts'
import type { EventListenerList } from '../../javax/swing/event/EventListenerList.d.ts'
import type { ComponentUI } from '../../javax/swing/plaf/ComponentUI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class JComponent extends Container implements Serializable, TransferHandler$HasGetTransferHandler {
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
    // private aaHint: Object;
    readonly actionMap: ActionMap;
    readonly alignmentX: number;
    readonly alignmentY: number;
    // private ancestorInputMap: InputMap;
    readonly autoscrolls: boolean;
    readonly border: Border;
    // private clientProperties: ArrayTable;
    // private flags: number;
    // private focusInputMap: InputMap;
    readonly inputVerifier: InputVerifier;
    // private isAlignmentXSet: boolean;
    // private isAlignmentYSet: boolean;
    // private lcdRenderingHint: Object;
    // private listenerList: EventListenerList;
    // private paintingChild: Component;
    // private popupMenu: JPopupMenu;
    // private revalidateRunnableScheduled: AtomicBoolean;
    // private ui: ComponentUI;
    readonly verifyInputWhenFocusTarget: boolean;
    // private vetoableChangeSupport: VetoableChangeSupport;
    // private windowInputMap: ComponentInputMap;
    _paintImmediately(arg0: number, arg1: number, arg2: number, arg3: number): void;
    addAncestorListener(arg0: AncestorListener): void;
    addNotify(): void;
    addVetoableChangeListener(arg0: VetoableChangeListener): void;
    // private adjustPaintFlags(): void;
    alwaysOnTop(): boolean;
    checkIfChildObscuredBySibling(): boolean;
    clientPropertyChanged(arg0: Object, arg1: Object, arg2: Object): void;
    compWriteObjectNotify(): void;
    componentInputMapChanged(arg0: ComponentInputMap): void;
    computeVisibleRect(arg0: Rectangle): void;
    contains(arg0: Point): boolean;
    contains(arg0: number, arg1: number): boolean;
    createToolTip(): JToolTip;
    // private deregisterNextFocusableComponent(): void;
    disable(): void;
    dndDone(): void;
    dropLocationForPoint(arg0: Point): TransferHandler$DropLocation;
    enable(): void;
    enable(arg0: boolean): void;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    firePropertyChange(arg0: string, arg1: boolean, arg2: boolean): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: string, arg2: string): void;
    fireVetoableChange(arg0: string, arg1: Object, arg2: Object): void;
    getActionForKeyStroke(arg0: KeyStroke): ActionListener;
    getActionMap(): ActionMap;
    getActionMap(arg0: boolean): ActionMap;
    getAlignmentX(): number;
    getAlignmentY(): number;
    getAncestorListeners(): AncestorListener[];
    // private getAncestorNotifier(): AncestorNotifier;
    getAutoscrolls(): boolean;
    getBaseline(arg0: number, arg1: number): number;
    getBaselineResizeBehavior(): Component$BaselineResizeBehavior;
    getBorder(): Border;
    getBounds(): Rectangle;
    getBounds(arg0: Rectangle): Rectangle;
    // private getClientProperties(): ArrayTable;
    getClientProperty(arg0: Object): Object;
    getComponentGraphics(arg0: Graphics): Graphics;
    getComponentPopupMenu(): JPopupMenu;
    getConditionForKeyStroke(arg0: KeyStroke): number;
    getCreatedDoubleBuffer(): boolean;
    getDebugGraphicsOptions(): number;
    // private getFlag(arg0: number): boolean;
    getFontMetrics(arg0: Font): FontMetrics;
    getGraphics(): Graphics;
    getHeight(): number;
    getInheritsPopupMenu(): boolean;
    getInputMap(): InputMap;
    getInputMap(arg0: number): InputMap;
    getInputMap(arg0: number, arg1: boolean): InputMap;
    getInputVerifier(): InputVerifier;
    getInsets(): Insets;
    getInsets(arg0: Insets): Insets;
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    getLocation(): Point;
    getLocation(arg0: Point): Point;
    getMaximumSize(): Dimension;
    getMinimumSize(): Dimension;
    getNextFocusableComponent(): Component;
    // private getObscuredState(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
    getPopupLocation(arg0: MouseEvent): Point;
    getPreferredSize(): Dimension;
    getRegisteredKeyStrokes(): KeyStroke[];
    getRootPane(): JRootPane;
    getSize(): Dimension;
    getSize(arg0: Dimension): Dimension;
    getToolTipLocation(arg0: MouseEvent): Point;
    getToolTipText(): string;
    getToolTipText(arg0: MouseEvent): string;
    getTopLevelAncestor(): Container;
    getTransferHandler(): TransferHandler;
    getUI(): ComponentUI;
    getUIClassID(): string;
    getVerifyInputWhenFocusTarget(): boolean;
    getVetoableChangeListeners(): VetoableChangeListener[];
    getVisibleRect(): Rectangle;
    getWidth(): number;
    getX(): number;
    getY(): number;
    grabFocus(): void;
    hide(): void;
    isDoubleBuffered(): boolean;
    isManagingFocus(): boolean;
    isOpaque(): boolean;
    isOptimizedDrawingEnabled(): boolean;
    isPainting(): boolean;
    isPaintingForPrint(): boolean;
    isPaintingOrigin(): boolean;
    isPaintingTile(): boolean;
    isRequestFocusEnabled(): boolean;
    isValidateRoot(): boolean;
    paint(arg0: Graphics): void;
    paintBorder(arg0: Graphics): void;
    paintChildren(arg0: Graphics): void;
    paintComponent(arg0: Graphics): void;
    paintForceDoubleBuffered(arg0: Graphics): void;
    paintImmediately(arg0: Rectangle): void;
    paintImmediately(arg0: number, arg1: number, arg2: number, arg3: number): void;
    paintToOffscreen(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    paramString(): string;
    print(arg0: Graphics): void;
    printAll(arg0: Graphics): void;
    printBorder(arg0: Graphics): void;
    printChildren(arg0: Graphics): void;
    printComponent(arg0: Graphics): void;
    processComponentKeyEvent(arg0: KeyEvent): void;
    processKeyBinding(arg0: KeyStroke, arg1: KeyEvent, arg2: number, arg3: boolean): boolean;
    processKeyBindings(arg0: KeyEvent, arg1: boolean): boolean;
    processKeyEvent(arg0: KeyEvent): void;
    processMouseEvent(arg0: MouseEvent): void;
    processMouseMotionEvent(arg0: MouseEvent): void;
    putClientProperty(arg0: Object, arg1: Object): void;
    // private readObject(arg0: ObjectInputStream): void;
    rectangleIsObscured(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    registerKeyboardAction(arg0: ActionListener, arg1: KeyStroke, arg2: number): void;
    registerKeyboardAction(arg0: ActionListener, arg1: string, arg2: KeyStroke, arg3: number): void;
    // private registerNextFocusableComponent(): void;
    // private registerNextFocusableComponent(arg0: Component): void;
    // private registerWithKeyboardManager(arg0: KeyStroke): void;
    // private registerWithKeyboardManager(arg0: boolean): void;
    removeAncestorListener(arg0: AncestorListener): void;
    removeNotify(): void;
    removeVetoableChangeListener(arg0: VetoableChangeListener): void;
    repaint(): void;
    repaint(arg0: Rectangle): void;
    repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
    repaint(arg0: number): void;
    repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    requestDefaultFocus(): boolean;
    requestFocus(): void;
    requestFocus(arg0: FocusEvent$Cause): void;
    requestFocus(arg0: boolean): boolean;
    requestFocus(arg0: boolean, arg1: FocusEvent$Cause): boolean;
    requestFocusInWindow(): boolean;
    requestFocusInWindow(arg0: FocusEvent$Cause): boolean;
    requestFocusInWindow(arg0: boolean): boolean;
    resetKeyboardActions(): void;
    reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
    revalidate(): void;
    scrollRectToVisible(arg0: Rectangle): void;
    setActionMap(arg0: ActionMap): void;
    setAlignmentX(arg0: number): void;
    setAlignmentY(arg0: number): void;
    setAutoscrolls(arg0: boolean): void;
    setBackground(arg0: Color): void;
    setBorder(arg0: Border): void;
    setComponentPopupMenu(arg0: JPopupMenu): void;
    setCreatedDoubleBuffer(arg0: boolean): void;
    setDebugGraphicsOptions(arg0: number): void;
    setDoubleBuffered(arg0: boolean): void;
    setDropLocation(arg0: TransferHandler$DropLocation, arg1: Object, arg2: boolean): Object;
    setEnabled(arg0: boolean): void;
    // private setFlag(arg0: number, arg1: boolean): void;
    setFocusTraversalKeys(arg0: number, arg1: AWTKeyStroke[]): void;
    setFont(arg0: Font): void;
    setForeground(arg0: Color): void;
    setInheritsPopupMenu(arg0: boolean): void;
    setInputMap(arg0: number, arg1: InputMap): void;
    setInputVerifier(arg0: InputVerifier): void;
    setMaximumSize(arg0: Dimension): void;
    setMinimumSize(arg0: Dimension): void;
    setNextFocusableComponent(arg0: Component): void;
    setOpaque(arg0: boolean): void;
    setPaintingChild(arg0: Component): void;
    setPreferredSize(arg0: Dimension): void;
    setRequestFocusEnabled(arg0: boolean): void;
    setToolTipText(arg0: string): void;
    setTransferHandler(arg0: TransferHandler): void;
    setUI(arg0: ComponentUI): void;
    setUIProperty(arg0: string, arg1: Object): void;
    setVerifyInputWhenFocusTarget(arg0: boolean): void;
    setVisible(arg0: boolean): void;
    shouldDebugGraphics(): number;
    superProcessMouseMotionEvent(arg0: MouseEvent): void;
    // private uninstallUIAndProperties(): void;
    unregisterKeyboardAction(arg0: KeyStroke): void;
    // private unregisterWithKeyboardManager(): void;
    // private unregisterWithKeyboardManager(arg0: KeyStroke): void;
    update(arg0: Graphics): void;
    updateUI(): void;
    // private validateAlignment(arg0: number): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}