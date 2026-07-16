import type { Color } from '../../java/awt/Color.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Cursor } from '../../java/awt/Cursor.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { MenuBar } from '../../java/awt/MenuBar.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { MenuContainer } from '../../java/awt/MenuContainer.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class Frame extends Window implements MenuContainer {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static CROSSHAIR_CURSOR: number;
    static DEFAULT_CURSOR: number;
    static ERROR: number;
    static E_RESIZE_CURSOR: number;
    static FRAMEBITS: number;
    static HAND_CURSOR: number;
    static HEIGHT: number;
    static ICONIFIED: number;
    static LEFT_ALIGNMENT: number;
    static MAXIMIZED_BOTH: number;
    static MAXIMIZED_HORIZ: number;
    static MAXIMIZED_VERT: number;
    static MOVE_CURSOR: number;
    static NE_RESIZE_CURSOR: number;
    static NORMAL: number;
    static NW_RESIZE_CURSOR: number;
    static N_RESIZE_CURSOR: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SE_RESIZE_CURSOR: number;
    static SOMEBITS: number;
    static SW_RESIZE_CURSOR: number;
    static S_RESIZE_CURSOR: number;
    static TEXT_CURSOR: number;
    static TOP_ALIGNMENT: number;
    static WAIT_CURSOR: number;
    static WIDTH: number;
    static W_RESIZE_CURSOR: number;
    static getFrames(): Frame[];
    static getOwnerlessWindows(): Window[];
    static getWindows(): Window[];
    constructor()
    constructor(arg0: GraphicsConfiguration)
    constructor(arg0: string)
    constructor(arg0: string, arg1: GraphicsConfiguration)
    // private frameSerializedDataVersion: number;
    maximizedBounds: Rectangle;
    // private mbManagement: boolean;
    menuBar: MenuBar;
    ownedWindows: Window[];
    resizable: boolean;
    readonly state: number;
    title: string;
    undecorated: boolean;
    addNotify(): void;
    constructComponentName(): string;
    getAccessibleContext(): AccessibleContext;
    getCursorType(): number;
    getExtendedState(): number;
    getIconImage(): Image;
    getMaximizedBounds(): Rectangle;
    getMenuBar(): MenuBar;
    getState(): number;
    getTitle(): string;
    // private init(arg0: string, arg1: GraphicsConfiguration): void;
    // private isFrameStateSupported(arg0: number): boolean;
    isResizable(): boolean;
    isUndecorated(): boolean;
    paramString(): string;
    postProcessKeyEvent(arg0: KeyEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: Component): void;
    remove(arg0: MenuComponent): void;
    remove(arg0: number): void;
    removeNotify(): void;
    setBackground(arg0: Color): void;
    setCursor(arg0: Cursor): void;
    setCursor(arg0: number): void;
    setExtendedState(arg0: number): void;
    setIconImage(arg0: Image): void;
    setMaximizedBounds(arg0: Rectangle): void;
    setMenuBar(arg0: MenuBar): void;
    setOpacity(arg0: number): void;
    setResizable(arg0: boolean): void;
    setShape(arg0: Shape): void;
    setState(arg0: number): void;
    setTitle(arg0: string): void;
    setUndecorated(arg0: boolean): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}