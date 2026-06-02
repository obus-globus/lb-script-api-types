import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { AWTKeyStroke } from '../../java/awt/AWTKeyStroke.d.ts'
import type { BufferCapabilities } from '../../java/awt/BufferCapabilities.d.ts'
import type { Color } from '../../java/awt/Color.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { Cursor } from '../../java/awt/Cursor.d.ts'
import type { Dialog } from '../../java/awt/Dialog.d.ts'
import type { Dialog$ModalExclusionType } from '../../java/awt/Dialog$ModalExclusionType.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Event } from '../../java/awt/Event.d.ts'
import type { FocusManager } from '../../java/awt/FocusManager.d.ts'
import type { Frame } from '../../java/awt/Frame.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Toolkit } from '../../java/awt/Toolkit.d.ts'
import type { Window$Type } from '../../java/awt/Window$Type.d.ts'
import type { Window$WindowDisposerRecord } from '../../java/awt/Window$WindowDisposerRecord.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { MouseWheelEvent } from '../../java/awt/event/MouseWheelEvent.d.ts'
import type { WindowEvent } from '../../java/awt/event/WindowEvent.d.ts'
import type { WindowFocusListener } from '../../java/awt/event/WindowFocusListener.d.ts'
import type { WindowListener } from '../../java/awt/event/WindowListener.d.ts'
import type { WindowStateListener } from '../../java/awt/event/WindowStateListener.d.ts'
import type { InputContext } from '../../java/awt/im/InputContext.d.ts'
import type { BufferStrategy } from '../../java/awt/image/BufferStrategy.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../java/util/ResourceBundle.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Region } from '../../sun/java2d/pipe/Region.d.ts'
export class Window extends Container implements Accessible {
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
    static getOwnerlessWindows(): (Object | null)[];
    static getWindows(): (Object | null)[];
    constructor()
    constructor(arg0: Frame)
    constructor(arg0: GraphicsConfiguration)
    constructor(arg0: Window)
    constructor(arg0: Window, arg1: GraphicsConfiguration)
    readonly alwaysOnTop: boolean;
    // private anchor: Object;
    readonly autoRequestFocus: boolean;
    // private beforeFirstShow: boolean;
    // private disposerRecord: Window$WindowDisposerRecord;
    // private disposing: boolean;
    // private focusMgr: FocusManager;
    readonly focusableWindowState: boolean;
    // private icons: Image[];
    inputContext: InputContext;
    // private inputContextLock: Object;
    // private isInShow: boolean;
    // private isTrayIconWindow: boolean;
    readonly locationByPlatform: boolean;
    // private modalBlocker: Dialog;
    modalExclusionType: Dialog$ModalExclusionType;
    readonly opacity: number;
    // private ownedWindowList: WeakReference<Window>[];
    readonly shape: Shape;
    // private showWithParent: boolean;
    // private state: number;
    // private syncLWRequests: boolean;
    // private temporaryLostComponent: Component;
    readonly type: Window$Type;
    // private weakThis: WeakReference<Window>;
    // private windowFocusListener: WindowFocusListener;
    // private windowListener: WindowListener;
    // private windowSerializedDataVersion: number;
    // private windowStateListener: WindowStateListener;
    addNotify(): void;
    addOwnedWindow(arg0: WeakReference<Window>): void;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    addPropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    // private addToWindowList(): void;
    addWindowFocusListener(arg0: WindowFocusListener): void;
    addWindowListener(arg0: WindowListener): void;
    addWindowStateListener(arg0: WindowStateListener): void;
    adjustDescendantsOnParent(arg0: number): void;
    adjustListeningChildrenOnParent(arg0: number, arg1: number): void;
    applyCompoundShape(arg0: Region): void;
    applyCurrentShape(): void;
    applyResourceBundle(arg0: ResourceBundle): void;
    applyResourceBundle(arg0: string): void;
    canContainFocusOwner(arg0: Component): boolean;
    clearMostRecentFocusOwnerOnHide(): void;
    closeSplashScreen(): void;
    connectOwnedWindow(arg0: Window): void;
    constructComponentName(): string;
    createBufferStrategy(arg0: number): void;
    createBufferStrategy(arg0: number, arg1: BufferCapabilities): void;
    deliverMouseWheelToAncestor(arg0: MouseWheelEvent): void;
    // private deserializeResources(arg0: ObjectInputStream): void;
    dispatchEventImpl(arg0: AWTEvent): void;
    dispatchMouseWheelToAncestor(arg0: MouseWheelEvent): boolean;
    dispose(): void;
    disposeImpl(): void;
    doDispose(): void;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getBackground(): Color;
    getBufferStrategy(): BufferStrategy;
    getContainer(): Container;
    getDocumentRoot(): Window;
    getFocusCycleRootAncestor(): Container;
    getFocusOwner(): Component;
    getFocusTraversalKeys(arg0: number): AWTKeyStroke[];
    getFocusableWindowState(): boolean;
    getIconImages(): Image[];
    getInputContext(): InputContext;
    getListeners(arg0: Class<T>): T[];
    getLocale(): Locale;
    getLocationOnWindow(): Point;
    getModalBlocker(): Dialog;
    getModalExclusionType(): Dialog$ModalExclusionType;
    getMostRecentFocusOwner(): Component;
    getOpacity(): number;
    getOwnedWindows(): Window[];
    getOwnedWindows_NoClientCode(): Window[];
    getOwner(): Window;
    getOwner_NoClientCode(): Window;
    getShape(): Shape;
    getTemporaryLostComponent(): Component;
    getToolkit(): Toolkit;
    getType(): Window$Type;
    getWarningString(): string;
    getWindowFocusListeners(): WindowFocusListener[];
    getWindowListeners(): WindowListener[];
    getWindowStateListeners(): WindowStateListener[];
    hide(): void;
    // private init(arg0: GraphicsConfiguration): void;
    // private initDeserializedWindow(): void;
    // private initGC(arg0: GraphicsConfiguration): GraphicsConfiguration;
    isActive(): boolean;
    isAlwaysOnTop(): boolean;
    isAlwaysOnTopSupported(): boolean;
    isAutoRequestFocus(): boolean;
    isDisposing(): boolean;
    isFocusCycleRoot(): boolean;
    isFocusableWindow(): boolean;
    isFocused(): boolean;
    isLocationByPlatform(): boolean;
    isModalBlocked(): boolean;
    isModalExcluded(arg0: Dialog$ModalExclusionType): boolean;
    isOpaque(): boolean;
    isRecursivelyVisible(): boolean;
    isShowing(): boolean;
    isValidateRoot(): boolean;
    mixOnReshaping(): void;
    // private ownedInit(arg0: Window): void;
    pack(): void;
    paint(arg0: Graphics): void;
    postEvent(arg0: Event): boolean;
    postProcessKeyEvent(arg0: KeyEvent): void;
    postWindowEvent(arg0: number): void;
    preProcessKeyEvent(arg0: KeyEvent): void;
    processEvent(arg0: AWTEvent): void;
    processWindowEvent(arg0: WindowEvent): void;
    processWindowFocusEvent(arg0: WindowEvent): void;
    processWindowStateEvent(arg0: WindowEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    // private removeFromWindowList(): void;
    removeNotify(): void;
    removeOwnedWindow(arg0: WeakReference<Window>): void;
    removeWindowFocusListener(arg0: WindowFocusListener): void;
    removeWindowListener(arg0: WindowListener): void;
    removeWindowStateListener(arg0: WindowStateListener): void;
    reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setAlwaysOnTop(arg0: boolean): void;
    setAutoRequestFocus(arg0: boolean): void;
    setBackground(arg0: Color): void;
    setBounds(arg0: Rectangle): void;
    setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setClientSize(arg0: number, arg1: number): void;
    setCursor(arg0: Cursor): void;
    setFocusCycleRoot(arg0: boolean): void;
    setFocusableWindowState(arg0: boolean): void;
    setGraphicsConfiguration(arg0: GraphicsConfiguration): void;
    setIconImage(arg0: Image): void;
    setIconImages(arg0: Image[]): void;
    setLocation(arg0: Point): void;
    setLocation(arg0: number, arg1: number): void;
    setLocationByPlatform(arg0: boolean): void;
    setLocationRelativeTo(arg0: Component): void;
    setMinimumSize(arg0: Dimension): void;
    setModalBlocked(arg0: Dialog, arg1: boolean, arg2: boolean): void;
    setModalExclusionType(arg0: Dialog$ModalExclusionType): void;
    setOpacity(arg0: number): void;
    // private setOwnedWindowsAlwaysOnTop(arg0: boolean): void;
    setShape(arg0: Shape): void;
    setSize(arg0: Dimension): void;
    setSize(arg0: number, arg1: number): void;
    setTemporaryLostComponent(arg0: Component): Component;
    setType(arg0: Window$Type): void;
    setVisible(arg0: boolean): void;
    show(): void;
    toBack(): void;
    toBack_NoClientCode(): void;
    toFront(): void;
    toFront_NoClientCode(): void;
    updateChildrenBlocking(): void;
    // private updateWindow(): void;
    updateZOrder(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}