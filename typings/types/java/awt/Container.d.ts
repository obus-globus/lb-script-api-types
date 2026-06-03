import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { AWTKeyStroke } from '../../java/awt/AWTKeyStroke.d.ts'
import type { Color } from '../../java/awt/Color.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { ComponentOrientation } from '../../java/awt/ComponentOrientation.d.ts'
import type { Container$EventTargetFilter } from '../../java/awt/Container$EventTargetFilter.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Event } from '../../java/awt/Event.d.ts'
import type { FocusTraversalPolicy } from '../../java/awt/FocusTraversalPolicy.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { LightweightDispatcher } from '../../java/awt/LightweightDispatcher.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { PopupMenu } from '../../java/awt/PopupMenu.d.ts'
import type { ContainerEvent } from '../../java/awt/event/ContainerEvent.d.ts'
import type { ContainerListener } from '../../java/awt/event/ContainerListener.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { ContainerPeer } from '../../java/awt/peer/ContainerPeer.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { PrintStream } from '../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../java/io/PrintWriter.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext } from '../../sun/awt/AppContext.d.ts'
import type { Region } from '../../sun/java2d/pipe/Region.d.ts'
export class Container extends Component {
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
    readonly component: Component[];
    // private containerListener: ContainerListener;
    // private containerSerializedDataVersion: number;
    // private descendantsCount: number;
    // private dispatcher: LightweightDispatcher;
    readonly focusCycleRoot: boolean;
    readonly focusTraversalPolicy: FocusTraversalPolicy;
    readonly focusTraversalPolicyProvider: boolean;
    // private layoutMgr: LayoutManager;
    // private listeningBoundsChildren: number;
    // private listeningChildren: number;
    // private modalAppContext: AppContext;
    // private modalComp: Component;
    // private numOfHWComponents: number;
    // private numOfLWComponents: number;
    // private preserveBackgroundColor: Color;
    // private printing: boolean;
    // private printingThreads: Thread[];
    add(arg0: Component): Component;
    add(arg0: Component, arg1: Object): void;
    add(arg0: Component, arg1: Object, arg2: number): void;
    add(arg0: Component, arg1: number): Component;
    add(arg0: PopupMenu): void;
    add(arg0: string, arg1: Component): Component;
    addContainerListener(arg0: ContainerListener): void;
    // private addDelicately(arg0: Component, arg1: Container, arg2: number): void;
    addImpl(arg0: Component, arg1: Object, arg2: number): void;
    addNotify(): void;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    addPropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    adjustDescendants(arg0: number): void;
    adjustDescendantsOnParent(arg0: number): void;
    adjustListeningChildren(arg0: number, arg1: number): void;
    applyComponentOrientation(arg0: ComponentOrientation): void;
    areFocusTraversalKeysSet(arg0: number): boolean;
    canContainFocusOwner(arg0: Component): boolean;
    // private checkAddToSelf(arg0: Component): void;
    // private checkAdding(arg0: Component, arg1: number): void;
    checkGD(arg0: string): void;
    // private checkNotAWindow(arg0: Component): void;
    clearCurrentFocusCycleRootOnHide(): void;
    clearMostRecentFocusOwnerOnHide(): void;
    containsFocus(): boolean;
    countComponents(): number;
    countHierarchyMembers(): number;
    createChildHierarchyEvents(arg0: number, arg1: number, arg2: boolean): void;
    createHierarchyEvents(arg0: number, arg1: Component, arg2: Container, arg3: number, arg4: boolean): number;
    decreaseComponentCount(arg0: Component): void;
    deliverEvent(arg0: Event): void;
    dispatchEventImpl(arg0: AWTEvent): void;
    dispatchEventToSelf(arg0: AWTEvent): void;
    doLayout(): void;
    eventEnabled(arg0: AWTEvent): boolean;
    findComponentAt(arg0: Point): Component;
    findComponentAt(arg0: number, arg1: number): Component;
    findComponentAt(arg0: number, arg1: number, arg2: boolean): Component;
    findComponentAtImpl(arg0: number, arg1: number, arg2: boolean): Component;
    // private findTraversalRoot(): Container;
    getAccessibleAt(arg0: Point): Accessible;
    getAccessibleChild(arg0: number): Accessible;
    getAccessibleChildrenCount(): number;
    getAlignmentX(): number;
    getAlignmentY(): number;
    // private getBottommostComponentIndex(): number;
    getComponent(arg0: number): Component;
    getComponentAt(arg0: Point): Component;
    getComponentAt(arg0: number, arg1: number): Component;
    getComponentCount(): number;
    getComponentZOrder(arg0: Component): number;
    getComponents(): Component[];
    getComponentsSync(): Component[];
    getComponents_NoClientCode(): Component[];
    getContainerListeners(): ContainerListener[];
    getDropTargetEventTarget(arg0: number, arg1: number, arg2: boolean): Component;
    getFocusTraversalKeys(arg0: number): AWTKeyStroke[];
    getFocusTraversalPolicy(): FocusTraversalPolicy;
    getHeavyweightContainer(): Container;
    getInsets(): Insets;
    getLayout(): LayoutManager;
    getListeners(arg0: Class<T>): T[];
    // private getListenersCount(arg0: number, arg1: boolean): number;
    getMaximumSize(): Dimension;
    getMinimumSize(): Dimension;
    getMouseEventTarget(arg0: number, arg1: number, arg2: boolean): Component;
    // private getMouseEventTarget(arg0: number, arg1: number, arg2: boolean, arg3: Container$EventTargetFilter, arg4: boolean): Component;
    // private getMouseEventTargetImpl(arg0: number, arg1: number, arg2: boolean, arg3: Container$EventTargetFilter, arg4: boolean, arg5: boolean): Component;
    getMousePosition(): Point;
    getMousePosition(arg0: boolean): Point;
    getOpaqueShape(): Region;
    getPreferredSize(): Dimension;
    // private getTopmostComponentIndex(): number;
    getTraversalRoot(): Container;
    hasHeavyweightDescendants(): boolean;
    hasLightweightDescendants(): boolean;
    increaseComponentCount(arg0: Component): void;
    initializeFocusTraversalKeys(): void;
    insets(): Insets;
    invalidate(): void;
    invalidateParent(): void;
    invalidateTree(): void;
    isAncestorOf(arg0: Component): boolean;
    isFocusCycleRoot(): boolean;
    isFocusCycleRoot(arg0: Container): boolean;
    isFocusTraversalPolicyProvider(): boolean;
    isFocusTraversalPolicySet(): boolean;
    // private isParentOf(arg0: Component): boolean;
    isRecursivelyVisibleUpToHeavyweightContainer(): boolean;
    isSameOrAncestorOf(arg0: Component, arg1: boolean): boolean;
    isValidateRoot(): boolean;
    layout(): void;
    lightweightPaint(arg0: Graphics): void;
    lightweightPrint(arg0: Graphics): void;
    list(): void;
    list(arg0: PrintStream): void;
    list(arg0: PrintStream, arg1: number): void;
    list(arg0: PrintWriter): void;
    list(arg0: PrintWriter, arg1: number): void;
    locate(arg0: number, arg1: number): Component;
    minimumSize(): Dimension;
    mixOnHiding(arg0: boolean): void;
    mixOnReshaping(): void;
    mixOnShowing(): void;
    mixOnValidating(): void;
    mixOnZOrderChanging(arg0: number, arg1: number): void;
    numListening(arg0: number): number;
    paint(arg0: Graphics): void;
    paintComponents(arg0: Graphics): void;
    paintHeavyweightComponents(arg0: Graphics): void;
    paramString(): string;
    postProcessKeyEvent(arg0: KeyEvent): void;
    postsOldMouseEvents(): boolean;
    preProcessKeyEvent(arg0: KeyEvent): void;
    preferredSize(): Dimension;
    print(arg0: Graphics): void;
    printComponents(arg0: Graphics): void;
    printHeavyweightComponents(arg0: Graphics): void;
    processContainerEvent(arg0: ContainerEvent): void;
    processEvent(arg0: AWTEvent): void;
    proxyEnableEvents(arg0: number): void;
    // private readObject(arg0: ObjectInputStream): void;
    recursiveApplyCurrentShape(): void;
    recursiveApplyCurrentShape(arg0: number): void;
    recursiveApplyCurrentShape(arg0: number, arg1: number): void;
    // private recursiveHideHeavyweightChildren(): void;
    // private recursiveRelocateHeavyweightChildren(arg0: Point): void;
    // private recursiveShowHeavyweightChildren(): void;
    recursiveSubtractAndApplyShape(arg0: Region): void;
    recursiveSubtractAndApplyShape(arg0: Region, arg1: number): void;
    recursiveSubtractAndApplyShape(arg0: Region, arg1: number, arg2: number): void;
    remove(arg0: Component): void;
    remove(arg0: MenuComponent): void;
    remove(arg0: number): void;
    removeAll(): void;
    removeContainerListener(arg0: ContainerListener): void;
    // private removeDelicately(arg0: Component, arg1: Container, arg2: number): boolean;
    removeNotify(): void;
    // private reparentChild(arg0: Component): void;
    // private reparentTraverse(arg0: ContainerPeer, arg1: Container): void;
    setComponentZOrder(arg0: Component, arg1: number): void;
    setFocusCycleRoot(arg0: boolean): void;
    setFocusTraversalKeys(arg0: number, arg1: AWTKeyStroke[]): void;
    setFocusTraversalPolicy(arg0: FocusTraversalPolicy): void;
    setFocusTraversalPolicyProvider(arg0: boolean): void;
    setFont(arg0: Font): void;
    setLayout(arg0: LayoutManager): void;
    // private startLWModal(): void;
    // private stopLWModal(): void;
    transferFocusDownCycle(): void;
    update(arg0: Graphics): void;
    updateChildGraphicsData(arg0: GraphicsConfiguration): boolean;
    validate(): void;
    validateTree(): void;
    validateUnconditionally(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}