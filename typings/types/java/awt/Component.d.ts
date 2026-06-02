import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { AWTKeyStroke } from '../../java/awt/AWTKeyStroke.d.ts'
import type { BufferCapabilities } from '../../java/awt/BufferCapabilities.d.ts'
import type { Color } from '../../java/awt/Color.d.ts'
import type { Component$BaselineResizeBehavior } from '../../java/awt/Component$BaselineResizeBehavior.d.ts'
import type { ComponentOrientation } from '../../java/awt/ComponentOrientation.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { Cursor } from '../../java/awt/Cursor.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Event } from '../../java/awt/Event.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { FontMetrics } from '../../java/awt/FontMetrics.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { ImageCapabilities } from '../../java/awt/ImageCapabilities.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { MenuContainer } from '../../java/awt/MenuContainer.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { PointerInfo } from '../../java/awt/PointerInfo.d.ts'
import type { PopupMenu } from '../../java/awt/PopupMenu.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Toolkit } from '../../java/awt/Toolkit.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { DropTarget } from '../../java/awt/dnd/DropTarget.d.ts'
import type { ComponentEvent } from '../../java/awt/event/ComponentEvent.d.ts'
import type { ComponentListener } from '../../java/awt/event/ComponentListener.d.ts'
import type { FocusEvent } from '../../java/awt/event/FocusEvent.d.ts'
import type { FocusEvent$Cause } from '../../java/awt/event/FocusEvent$Cause.d.ts'
import type { FocusListener } from '../../java/awt/event/FocusListener.d.ts'
import type { HierarchyBoundsListener } from '../../java/awt/event/HierarchyBoundsListener.d.ts'
import type { HierarchyEvent } from '../../java/awt/event/HierarchyEvent.d.ts'
import type { HierarchyListener } from '../../java/awt/event/HierarchyListener.d.ts'
import type { InputMethodEvent } from '../../java/awt/event/InputMethodEvent.d.ts'
import type { InputMethodListener } from '../../java/awt/event/InputMethodListener.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { KeyListener } from '../../java/awt/event/KeyListener.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { MouseListener } from '../../java/awt/event/MouseListener.d.ts'
import type { MouseMotionListener } from '../../java/awt/event/MouseMotionListener.d.ts'
import type { MouseWheelEvent } from '../../java/awt/event/MouseWheelEvent.d.ts'
import type { MouseWheelListener } from '../../java/awt/event/MouseWheelListener.d.ts'
import type { InputContext } from '../../java/awt/im/InputContext.d.ts'
import type { InputMethodRequests } from '../../java/awt/im/InputMethodRequests.d.ts'
import type { BufferStrategy } from '../../java/awt/image/BufferStrategy.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { ImageObserver } from '../../java/awt/image/ImageObserver.d.ts'
import type { ImageProducer } from '../../java/awt/image/ImageProducer.d.ts'
import type { VolatileImage } from '../../java/awt/image/VolatileImage.d.ts'
import type { ComponentPeer } from '../../java/awt/peer/ComponentPeer.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport } from '../../java/beans/PropertyChangeSupport.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { PrintStream } from '../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../java/io/PrintWriter.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { AccessibleStateSet } from '../../javax/accessibility/AccessibleStateSet.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext } from '../../sun/awt/AppContext.d.ts'
import type { ComponentFactory } from '../../sun/awt/ComponentFactory.d.ts'
import type { EventQueueItem } from '../../sun/awt/EventQueueItem.d.ts'
import type { Region } from '../../sun/java2d/pipe/Region.d.ts'
export abstract class Component extends Object implements MenuContainer, ImageObserver, Serializable {
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
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    constructor()
    // private accessibleContext: AccessibleContext;
    // private appContext: AppContext;
    // private autoFocusTransferOnDisposal: boolean;
    background: Color;
    // private backgroundEraseDisabled: boolean;
    // private boundsOp: number;
    // private bufferStrategy: BufferStrategy;
    // private changeSupport: PropertyChangeSupport;
    // private coalescingEnabled: boolean;
    // private componentListener: ComponentListener;
    // private componentOrientation: ComponentOrientation;
    // private componentSerializedDataVersion: number;
    // private compoundShape: Region;
    // private cursor: Cursor;
    // private dropTarget: DropTarget;
    enabled: boolean;
    // private eventCache: EventQueueItem[];
    // private eventMask: number;
    // private focusListener: FocusListener;
    // private focusTraversalKeys: AWTKeyStroke[][];
    // private focusTraversalKeysEnabled: boolean;
    readonly focusable: boolean;
    font: Font;
    foreground: Color;
    // private graphicsConfig: GraphicsConfiguration;
    // private height: number;
    // private hierarchyBoundsListener: HierarchyBoundsListener;
    // private hierarchyListener: HierarchyListener;
    // private ignoreRepaint: boolean;
    // private inputMethodListener: InputMethodListener;
    // private isAddNotifyComplete: boolean;
    // private isFocusTraversableOverridden: number;
    // private isPacked: boolean;
    // private keyListener: KeyListener;
    // private locale: Locale;
    // private maxSize: Dimension;
    // private maxSizeSet: boolean;
    // private minSize: Dimension;
    // private minSizeSet: boolean;
    // private mixingCutoutRegion: Region;
    // private mouseListener: MouseListener;
    // private mouseMotionListener: MouseMotionListener;
    // private mouseWheelListener: MouseWheelListener;
    readonly name: string;
    // private nameExplicitlySet: boolean;
    // private newEventsOnly: boolean;
    // private objectLock: Object;
    // private parent: Container;
    // private peer: ComponentPeer;
    // private peerFont: Font;
    // private popups: PopupMenu[];
    // private prefSize: Dimension;
    // private prefSizeSet: boolean;
    // private valid: boolean;
    visible: boolean;
    // private width: number;
    // private x: number;
    // private y: number;
    action(arg0: Event, arg1: Object): boolean;
    add(arg0: PopupMenu): void;
    addComponentListener(arg0: ComponentListener): void;
    addFocusListener(arg0: FocusListener): void;
    addHierarchyBoundsListener(arg0: HierarchyBoundsListener): void;
    addHierarchyListener(arg0: HierarchyListener): void;
    addInputMethodListener(arg0: InputMethodListener): void;
    addKeyListener(arg0: KeyListener): void;
    addMouseListener(arg0: MouseListener): void;
    addMouseMotionListener(arg0: MouseMotionListener): void;
    addMouseWheelListener(arg0: MouseWheelListener): void;
    addNotify(): void;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    addPropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    adjustListeningChildrenOnParent(arg0: number, arg1: number): void;
    applyComponentOrientation(arg0: ComponentOrientation): void;
    applyCompoundShape(arg0: Region): void;
    applyCurrentShape(): void;
    // private applyCurrentShapeBelowMe(): void;
    areBoundsValid(): boolean;
    areFocusTraversalKeysSet(arg0: number): boolean;
    areInputMethodsEnabled(): boolean;
    autoProcessMouseWheel(arg0: MouseWheelEvent): void;
    bounds(): Rectangle;
    // private calculateCurrentShape(): Region;
    canBeFocusOwner(): boolean;
    canBeFocusOwnerRecursively(): boolean;
    // private checkCoalescing(): boolean;
    checkGD(arg0: string): void;
    checkImage(arg0: Image, arg1: ImageObserver): number;
    checkImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): number;
    checkTreeLock(): void;
    clearCurrentFocusCycleRootOnHide(): void;
    clearMostRecentFocusOwnerOnHide(): void;
    coalesceEvents(arg0: AWTEvent, arg1: AWTEvent): AWTEvent;
    constructComponentName(): string;
    contains(arg0: Point): boolean;
    contains(arg0: number, arg1: number): boolean;
    containsFocus(): boolean;
    countHierarchyMembers(): number;
    createBufferStrategy(arg0: number): void;
    createBufferStrategy(arg0: number, arg1: BufferCapabilities): void;
    createHierarchyEvents(arg0: number, arg1: Component, arg2: Container, arg3: number, arg4: boolean): number;
    createImage(arg0: ImageProducer): Image;
    createImage(arg0: number, arg1: number): Image;
    createVolatileImage(arg0: number, arg1: number): VolatileImage;
    createVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities): VolatileImage;
    deliverEvent(arg0: Event): void;
    disable(): void;
    disableEvents(arg0: number): void;
    dispatchEvent(arg0: AWTEvent): void;
    dispatchEventImpl(arg0: AWTEvent): void;
    dispatchMouseWheelToAncestor(arg0: MouseWheelEvent): boolean;
    doLayout(): void;
    // private doSwingSerialization(): void;
    enable(): void;
    enable(arg0: boolean): void;
    enableEvents(arg0: number): void;
    enableInputMethods(arg0: boolean): void;
    eventEnabled(arg0: AWTEvent): boolean;
    eventTypeEnabled(arg0: number): boolean;
    findUnderMouseInWindow(arg0: PointerInfo): Component;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    firePropertyChange(arg0: string, arg1: boolean, arg2: boolean): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: string, arg2: string): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    getAccessibleContext(): AccessibleContext;
    getAccessibleIndexInParent(): number;
    getAccessibleStateSet(): AccessibleStateSet;
    getAlignmentX(): number;
    getAlignmentY(): number;
    // private getAppliedShape(): Region;
    getBackBuffer(): Image;
    getBackground(): Color;
    getBaseline(arg0: number, arg1: number): number;
    getBaselineResizeBehavior(): Component$BaselineResizeBehavior;
    getBounds(): Rectangle;
    getBounds(arg0: Rectangle): Rectangle;
    getBoundsOp(): number;
    getBufferStrategy(): BufferStrategy;
    getColorModel(): ColorModel;
    getComponentAt(arg0: Point): Component;
    getComponentAt(arg0: number, arg1: number): Component;
    getComponentFactory(): ComponentFactory;
    getComponentListeners(): ComponentListener[];
    getComponentOrientation(): ComponentOrientation;
    getContainer(): Container;
    getContainingWindow(): Window;
    getCursor(): Cursor;
    getCursor_NoClientCode(): Cursor;
    getDropTarget(): DropTarget;
    getFocusCycleRootAncestor(): Container;
    getFocusListeners(): FocusListener[];
    getFocusTraversalKeys(arg0: number): AWTKeyStroke[];
    getFocusTraversalKeysEnabled(): boolean;
    getFocusTraversalKeys_NoIDCheck(arg0: number): AWTKeyStroke[];
    getFont(): Font;
    getFontMetrics(arg0: Font): FontMetrics;
    getFont_NoClientCode(): Font;
    getForeground(): Color;
    getGraphics(): Graphics;
    getGraphicsConfiguration(): GraphicsConfiguration;
    getGraphicsConfiguration_NoClientCode(): GraphicsConfiguration;
    getGraphics_NoClientCode(): Graphics;
    getHWPeerAboveMe(): ComponentPeer;
    getHeight(): number;
    getHierarchyBoundsListeners(): HierarchyBoundsListener[];
    getHierarchyListeners(): HierarchyListener[];
    getIgnoreRepaint(): boolean;
    getInputContext(): InputContext;
    getInputMethodListeners(): InputMethodListener[];
    getInputMethodRequests(): InputMethodRequests;
    // private getInsets_NoClientCode(): Insets;
    getKeyListeners(): KeyListener[];
    getListeners(arg0: Class<T>): T[];
    getLocale(): Locale;
    getLocation(): Point;
    getLocation(arg0: Point): Point;
    getLocationOnScreen(): Point;
    getLocationOnScreen_NoTreeLock(): Point;
    getLocationOnWindow(): Point;
    getMaximumSize(): Dimension;
    getMinimumSize(): Dimension;
    getMouseListeners(): MouseListener[];
    getMouseMotionListeners(): MouseMotionListener[];
    getMousePosition(): Point;
    getMouseWheelListeners(): MouseWheelListener[];
    getName(): string;
    getNativeContainer(): Container;
    getNextFocusCandidate(): Component;
    getNormalShape(): Region;
    getObjectLock(): Object;
    getOpaqueShape(): Region;
    getParent(): Container;
    getParent_NoClientCode(): Container;
    getPreferredSize(): Dimension;
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(arg0: string): PropertyChangeListener[];
    // private getRecursivelyVisibleBounds(): Rectangle;
    getSiblingIndexAbove(): number;
    getSiblingIndexBelow(): number;
    getSize(): Dimension;
    getSize(arg0: Dimension): Dimension;
    getToolkit(): Toolkit;
    getToolkitImpl(): Toolkit;
    getTraversalRoot(): Container;
    getTreeLock(): Object;
    getWidth(): number;
    getX(): number;
    getY(): number;
    gotFocus(arg0: Event, arg1: Object): boolean;
    handleEvent(arg0: Event): boolean;
    hasFocus(): boolean;
    hide(): void;
    imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    initializeFocusTraversalKeys(): void;
    inside(arg0: number, arg1: number): boolean;
    invalidate(): void;
    invalidateIfValid(): void;
    invalidateParent(): void;
    isAutoFocusTransferOnDisposal(): boolean;
    isBackgroundSet(): boolean;
    isCoalescingEnabled(): boolean;
    isCursorSet(): boolean;
    isDisplayable(): boolean;
    isDoubleBuffered(): boolean;
    isEnabled(): boolean;
    isEnabledImpl(): boolean;
    isFocusCycleRoot(arg0: Container): boolean;
    isFocusOwner(): boolean;
    isFocusTraversable(): boolean;
    isFocusTraversableOverridden(): boolean;
    isFocusable(): boolean;
    isFontSet(): boolean;
    isForegroundSet(): boolean;
    isLightweight(): boolean;
    isMaximumSizeSet(): boolean;
    isMinimumSizeSet(): boolean;
    isMixingNeeded(): boolean;
    isNonOpaqueForMixing(): boolean;
    isOpaque(): boolean;
    isPreferredSizeSet(): boolean;
    isRecursivelyVisible(): boolean;
    // private isRequestFocusAccepted(arg0: boolean, arg1: boolean, arg2: FocusEvent$Cause): boolean;
    isSameOrAncestorOf(arg0: Component, arg1: boolean): boolean;
    isShowing(): boolean;
    isValid(): boolean;
    isVisible(): boolean;
    isVisible_NoClientCode(): boolean;
    keyDown(arg0: Event, arg1: number): boolean;
    keyUp(arg0: Event, arg1: number): boolean;
    layout(): void;
    lightweightPaint(arg0: Graphics): void;
    lightweightPrint(arg0: Graphics): void;
    list(): void;
    list(arg0: PrintStream): void;
    list(arg0: PrintStream, arg1: number): void;
    list(arg0: PrintWriter): void;
    list(arg0: PrintWriter, arg1: number): void;
    locate(arg0: number, arg1: number): Component;
    location(): Point;
    // private location_NoClientCode(): Point;
    lostFocus(arg0: Event, arg1: Object): boolean;
    minimumSize(): Dimension;
    mixOnHiding(arg0: boolean): void;
    mixOnReshaping(): void;
    mixOnShowing(): void;
    mixOnValidating(): void;
    mixOnZOrderChanging(arg0: number, arg1: number): void;
    mouseDown(arg0: Event, arg1: number, arg2: number): boolean;
    mouseDrag(arg0: Event, arg1: number, arg2: number): boolean;
    mouseEnter(arg0: Event, arg1: number, arg2: number): boolean;
    mouseExit(arg0: Event, arg1: number, arg2: number): boolean;
    mouseMove(arg0: Event, arg1: number, arg2: number): boolean;
    mouseUp(arg0: Event, arg1: number, arg2: number): boolean;
    move(arg0: number, arg1: number): void;
    nextFocus(): void;
    // private notifyNewBounds(arg0: boolean, arg1: boolean): void;
    numListening(arg0: number): number;
    paint(arg0: Graphics): void;
    paintAll(arg0: Graphics): void;
    paintHeavyweightComponents(arg0: Graphics): void;
    paramString(): string;
    pointRelativeToComponent(arg0: Point): Point;
    postEvent(arg0: Event): boolean;
    postsOldMouseEvents(): boolean;
    preferredSize(): Dimension;
    prepareImage(arg0: Image, arg1: ImageObserver): boolean;
    prepareImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;
    print(arg0: Graphics): void;
    printAll(arg0: Graphics): void;
    printHeavyweightComponents(arg0: Graphics): void;
    processComponentEvent(arg0: ComponentEvent): void;
    processEvent(arg0: AWTEvent): void;
    processFocusEvent(arg0: FocusEvent): void;
    processHierarchyBoundsEvent(arg0: HierarchyEvent): void;
    processHierarchyEvent(arg0: HierarchyEvent): void;
    processInputMethodEvent(arg0: InputMethodEvent): void;
    processKeyEvent(arg0: KeyEvent): void;
    processMouseEvent(arg0: MouseEvent): void;
    processMouseMotionEvent(arg0: MouseEvent): void;
    processMouseWheelEvent(arg0: MouseWheelEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    relocateComponent(): void;
    remove(arg0: MenuComponent): void;
    removeComponentListener(arg0: ComponentListener): void;
    removeFocusListener(arg0: FocusListener): void;
    removeHierarchyBoundsListener(arg0: HierarchyBoundsListener): void;
    removeHierarchyListener(arg0: HierarchyListener): void;
    removeInputMethodListener(arg0: InputMethodListener): void;
    removeKeyListener(arg0: KeyListener): void;
    removeMouseListener(arg0: MouseListener): void;
    removeMouseMotionListener(arg0: MouseMotionListener): void;
    removeMouseWheelListener(arg0: MouseWheelListener): void;
    removeNotify(): void;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    removePropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    repaint(): void;
    repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
    repaint(arg0: number): void;
    repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    // private repaintParentIfNeeded(arg0: number, arg1: number, arg2: number, arg3: number): void;
    requestFocus(): void;
    requestFocus(arg0: FocusEvent$Cause): void;
    requestFocus(arg0: boolean): boolean;
    requestFocus(arg0: boolean, arg1: FocusEvent$Cause): boolean;
    requestFocusHelper(arg0: boolean, arg1: boolean): boolean;
    requestFocusHelper(arg0: boolean, arg1: boolean, arg2: FocusEvent$Cause): boolean;
    requestFocusInWindow(): boolean;
    requestFocusInWindow(arg0: FocusEvent$Cause): boolean;
    requestFocusInWindow(arg0: boolean): boolean;
    requestFocusInWindow(arg0: boolean, arg1: FocusEvent$Cause): boolean;
    reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private reshapeNativePeer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    resize(arg0: Dimension): void;
    resize(arg0: number, arg1: number): void;
    revalidate(): void;
    revalidateSynchronously(): void;
    setAutoFocusTransferOnDisposal(arg0: boolean): void;
    setBackground(arg0: Color): void;
    setBounds(arg0: Rectangle): void;
    setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setBoundsOp(arg0: number): void;
    setComponentOrientation(arg0: ComponentOrientation): void;
    setCursor(arg0: Cursor): void;
    setDropTarget(arg0: DropTarget): void;
    setEnabled(arg0: boolean): void;
    setFocusTraversalKeys(arg0: number, arg1: AWTKeyStroke[]): void;
    setFocusTraversalKeysEnabled(arg0: boolean): void;
    setFocusTraversalKeys_NoIDCheck(arg0: number, arg1: AWTKeyStroke[]): void;
    setFocusable(arg0: boolean): void;
    setFont(arg0: Font): void;
    setForeground(arg0: Color): void;
    setGraphicsConfiguration(arg0: GraphicsConfiguration): void;
    setIgnoreRepaint(arg0: boolean): void;
    setLocale(arg0: Locale): void;
    setLocation(arg0: Point): void;
    setLocation(arg0: number, arg1: number): void;
    setMaximumSize(arg0: Dimension): void;
    setMinimumSize(arg0: Dimension): void;
    setMixingCutoutShape(arg0: Shape): void;
    setName(arg0: string): void;
    setPreferredSize(arg0: Dimension): void;
    setSize(arg0: Dimension): void;
    setSize(arg0: number, arg1: number): void;
    setVisible(arg0: boolean): void;
    show(): void;
    show(arg0: boolean): void;
    size(): Dimension;
    subtractAndApplyShape(arg0: Region): void;
    subtractAndApplyShapeBelowMe(): void;
    toString(): string;
    transferFocus(): void;
    transferFocus(arg0: boolean): boolean;
    transferFocusBackward(): void;
    transferFocusBackward(arg0: boolean): boolean;
    transferFocusUpCycle(): void;
    update(arg0: Graphics): void;
    updateChildGraphicsData(arg0: GraphicsConfiguration): boolean;
    updateCursorImmediately(): void;
    updateGraphicsData(arg0: GraphicsConfiguration): boolean;
    // private updateSelfGraphicsData(arg0: GraphicsConfiguration): boolean;
    updateZOrder(): void;
    validate(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}