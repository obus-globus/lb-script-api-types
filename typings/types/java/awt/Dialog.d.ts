import type { Color } from '../../java/awt/Color.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Dialog$ModalityType } from '../../java/awt/Dialog$ModalityType.d.ts'
import type { Frame } from '../../java/awt/Frame.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { ModalEventFilter } from '../../java/awt/ModalEventFilter.d.ts'
import type { SecondaryLoop } from '../../java/awt/SecondaryLoop.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { AtomicLong } from '../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Dialog extends Window {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static DEFAULT_MODALITY_TYPE: Dialog$ModalityType;
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
    constructor(arg0: Dialog)
    constructor(arg0: Dialog, arg1: string)
    constructor(arg0: Dialog, arg1: string, arg2: boolean)
    constructor(arg0: Dialog, arg1: string, arg2: boolean, arg3: GraphicsConfiguration)
    constructor(arg0: Frame)
    constructor(arg0: Frame, arg1: boolean)
    constructor(arg0: Frame, arg1: string)
    constructor(arg0: Frame, arg1: string, arg2: boolean)
    constructor(arg0: Frame, arg1: string, arg2: boolean, arg3: GraphicsConfiguration)
    constructor(arg0: Window)
    constructor(arg0: Window, arg1: Dialog$ModalityType)
    constructor(arg0: Window, arg1: string)
    constructor(arg0: Window, arg1: string, arg2: Dialog$ModalityType)
    constructor(arg0: Window, arg1: string, arg2: Dialog$ModalityType, arg3: GraphicsConfiguration)
    // private blockedWindows: Window[];
    // private initialized: boolean;
    // private isInDispose: boolean;
    // private isInHide: boolean;
    modal: boolean;
    // private modalFilter: ModalEventFilter;
    modalityType: Dialog$ModalityType;
    resizable: boolean;
    // private secondaryLoop: SecondaryLoop;
    title: string;
    undecorated: boolean;
    addNotify(): void;
    blockWindow(arg0: Window): void;
    blockWindows(arg0: Window[]): void;
    // private conditionalShow(arg0: Component, arg1: AtomicLong): boolean;
    constructComponentName(): string;
    doDispose(): void;
    getAccessibleContext(): AccessibleContext;
    getModalityType(): Dialog$ModalityType;
    getTitle(): string;
    hide(): void;
    // private hideAndDisposeHandler(): void;
    // private hideAndDisposePreHandler(): void;
    isModal(): boolean;
    isModal_NoClientCode(): boolean;
    isResizable(): boolean;
    isUndecorated(): boolean;
    modalHide(): void;
    modalShow(): void;
    modalityPopped(): void;
    modalityPushed(): void;
    paramString(): string;
    // private readObject(arg0: ObjectInputStream): void;
    setBackground(arg0: Color): void;
    setModal(arg0: boolean): void;
    setModalityType(arg0: Dialog$ModalityType): void;
    setOpacity(arg0: number): void;
    setResizable(arg0: boolean): void;
    setShape(arg0: Shape): void;
    setTitle(arg0: string): void;
    setUndecorated(arg0: boolean): void;
    setVisible(arg0: boolean): void;
    shouldBlock(arg0: Window): boolean;
    show(): void;
    show(arg0: boolean): void;
    toBack(): void;
    unblockWindow(arg0: Window): void;
}