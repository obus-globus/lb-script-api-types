import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Cursor } from '../../java/awt/Cursor.d.ts'
import type { Dialog$ModalExclusionType } from '../../java/awt/Dialog$ModalExclusionType.d.ts'
import type { Dialog$ModalityType } from '../../java/awt/Dialog$ModalityType.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { EventQueue } from '../../java/awt/EventQueue.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { FontMetrics } from '../../java/awt/FontMetrics.d.ts'
import type { Frame } from '../../java/awt/Frame.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { JobAttributes } from '../../java/awt/JobAttributes.d.ts'
import type { PageAttributes } from '../../java/awt/PageAttributes.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { PrintJob } from '../../java/awt/PrintJob.d.ts'
import type { Toolkit$SelectiveAWTEventListener } from '../../java/awt/Toolkit$SelectiveAWTEventListener.d.ts'
import type { Clipboard } from '../../java/awt/datatransfer/Clipboard.d.ts'
import type { DragGestureListener } from '../../java/awt/dnd/DragGestureListener.d.ts'
import type { DragGestureRecognizer } from '../../java/awt/dnd/DragGestureRecognizer.d.ts'
import type { DragSource } from '../../java/awt/dnd/DragSource.d.ts'
import type { AWTEventListener } from '../../java/awt/event/AWTEventListener.d.ts'
import type { TextAttribute } from '../../java/awt/font/TextAttribute.d.ts'
import type { InputMethodHighlight } from '../../java/awt/im/InputMethodHighlight.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { ImageObserver } from '../../java/awt/image/ImageObserver.d.ts'
import type { ImageProducer } from '../../java/awt/image/ImageProducer.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport } from '../../java/beans/PropertyChangeSupport.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Toolkit extends Object {
    static getDefaultToolkit(): Toolkit;
    static getProperty(paramarg0: string, paramarg1: string): string;
    constructor()
    // private calls: number[];
    // private desktopProperties: { [key: string]: Object };
    // private desktopPropsSupport: PropertyChangeSupport;
    // private eventListener: AWTEventListener;
    // private listener2SelectiveListener: Map<AWTEventListener, Toolkit$SelectiveAWTEventListener>;
    addAWTEventListener(arg0: AWTEventListener, arg1: number): void;
    addPropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    areExtraMouseButtonsEnabled(): boolean;
    beep(): void;
    checkImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): number;
    countAWTEventListeners(arg0: number): number;
    createCustomCursor(arg0: Image, arg1: Point, arg2: string): Cursor;
    createDragGestureRecognizer<T extends DragGestureRecognizer>(arg0: Class<T>, arg1: DragSource, arg2: Component, arg3: number, arg4: DragGestureListener): T;
    createImage(arg0: ImageProducer): Image;
    createImage(arg0: URL): Image;
    createImage(arg0: number[]): Image;
    createImage(arg0: number[], arg1: number, arg2: number): Image;
    createImage(arg0: string): Image;
    getAWTEventListeners(): AWTEventListener[];
    getAWTEventListeners(arg0: number): AWTEventListener[];
    getBestCursorSize(arg0: number, arg1: number): Dimension;
    getColorModel(): ColorModel;
    getDesktopProperty(arg0: string): Object;
    getFontList(): string[];
    getFontMetrics(arg0: Font): FontMetrics;
    getImage(arg0: URL): Image;
    getImage(arg0: string): Image;
    getLockingKeyState(arg0: number): boolean;
    getMaximumCursorColors(): number;
    getMenuShortcutKeyMask(): number;
    getMenuShortcutKeyMaskEx(): number;
    getPrintJob(arg0: Frame, arg1: string, arg2: JobAttributes, arg3: PageAttributes): PrintJob;
    getPrintJob(arg0: Frame, arg1: string, arg2: { [key: string]: any }): PrintJob;
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(arg0: string): PropertyChangeListener[];
    getScreenInsets(arg0: GraphicsConfiguration): Insets;
    getScreenResolution(): number;
    getScreenSize(): Dimension;
    getSystemClipboard(): Clipboard;
    getSystemEventQueue(): EventQueue;
    getSystemEventQueueImpl(): EventQueue;
    getSystemSelection(): Clipboard;
    initializeDesktopProperties(): void;
    isAlwaysOnTopSupported(): boolean;
    isDynamicLayoutActive(): boolean;
    isDynamicLayoutSet(): boolean;
    isFrameStateSupported(arg0: number): boolean;
    isModalExclusionTypeSupported(arg0: Dialog$ModalExclusionType): boolean;
    isModalityTypeSupported(arg0: Dialog$ModalityType): boolean;
    lazilyLoadDesktopProperty(arg0: string): Object;
    loadSystemColors(arg0: number[]): void;
    mapInputMethodHighlight(arg0: InputMethodHighlight): Map<TextAttribute, Object | null>;
    notifyAWTEventListeners(arg0: AWTEvent): void;
    prepareImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;
    removeAWTEventListener(arg0: AWTEventListener): void;
    removePropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    setDesktopProperty(arg0: string, arg1: Object): void;
    setDynamicLayout(arg0: boolean): void;
    setLockingKeyState(arg0: number, arg1: boolean): void;
    sync(): void;
}