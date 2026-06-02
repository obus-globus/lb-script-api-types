import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Frame } from '../../java/awt/Frame.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { FocusEvent } from '../../java/awt/event/FocusEvent.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { JMenuItem } from '../../javax/swing/JMenuItem.d.ts'
import type { MenuElement } from '../../javax/swing/MenuElement.d.ts'
import type { MenuSelectionManager } from '../../javax/swing/MenuSelectionManager.d.ts'
import type { Popup } from '../../javax/swing/Popup.d.ts'
import type { SingleSelectionModel } from '../../javax/swing/SingleSelectionModel.d.ts'
import type { MenuKeyEvent } from '../../javax/swing/event/MenuKeyEvent.d.ts'
import type { MenuKeyListener } from '../../javax/swing/event/MenuKeyListener.d.ts'
import type { PopupMenuListener } from '../../javax/swing/event/PopupMenuListener.d.ts'
import type { PopupMenuUI } from '../../javax/swing/plaf/PopupMenuUI.d.ts'
export class JPopupMenu extends JComponent implements Accessible, MenuElement {
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
    static getDefaultLightWeightPopupEnabled(): boolean;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLightWeightPopupEnabled(paramarg0: boolean): void;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: string)
    // private desiredLocationX: number;
    // private desiredLocationY: number;
    // private frame: Frame;
    invoker: Component;
    readonly label: string;
    // private lightWeightPopup: boolean;
    readonly margin: Insets;
    // private paintBorder: boolean;
    // private popup: Popup;
    readonly selectionModel: SingleSelectionModel;
    add(arg0: Action): JMenuItem;
    add(arg0: JMenuItem): JMenuItem;
    add(arg0: string): JMenuItem;
    addMenuKeyListener(arg0: MenuKeyListener): void;
    addPopupMenuListener(arg0: PopupMenuListener): void;
    addSeparator(): void;
    adjustPopupLocationToFitScreen(arg0: number, arg1: number): Point;
    alwaysOnTop(): boolean;
    createActionChangeListener(arg0: JMenuItem): PropertyChangeListener;
    createActionComponent(arg0: Action): JMenuItem;
    // private fireMenuKeyPressed(arg0: MenuKeyEvent): void;
    // private fireMenuKeyReleased(arg0: MenuKeyEvent): void;
    // private fireMenuKeyTyped(arg0: MenuKeyEvent): void;
    firePopupMenuCanceled(): void;
    firePopupMenuWillBecomeInvisible(): void;
    firePopupMenuWillBecomeVisible(): void;
    getAccessibleContext(): AccessibleContext;
    getComponent(): Component;
    getComponentAtIndex(arg0: number): Component;
    getComponentIndex(arg0: Component): number;
    // private getCurrentGraphicsConfiguration(arg0: Point): GraphicsConfiguration;
    getInvoker(): Component;
    getLabel(): string;
    getMargin(): Insets;
    // private getMenuInvoker(): Window;
    getMenuKeyListeners(): MenuKeyListener[];
    getPopupMenuListeners(): PopupMenuListener[];
    getRootPopupMenu(): JPopupMenu;
    getSelectionModel(): SingleSelectionModel;
    getSubElements(): MenuElement[];
    getUI(): PopupMenuUI;
    getUIClassID(): string;
    insert(arg0: Component, arg1: number): void;
    insert(arg0: Action, arg1: number): void;
    isBorderPainted(): boolean;
    isLightWeightPopupEnabled(): boolean;
    // private isPopupMenu(): boolean;
    isPopupTrigger(arg0: MouseEvent): boolean;
    isSubPopupMenu(arg0: JPopupMenu): boolean;
    isVisible(): boolean;
    menuSelectionChanged(arg0: boolean): void;
    pack(): void;
    paintBorder(arg0: Graphics): void;
    paramString(): string;
    processFocusEvent(arg0: FocusEvent): void;
    processKeyEvent(arg0: KeyEvent): void;
    processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
    // private processMenuKeyEvent(arg0: MenuKeyEvent): void;
    processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: number): void;
    removeMenuKeyListener(arg0: MenuKeyListener): void;
    removePopupMenuListener(arg0: PopupMenuListener): void;
    setBorderPainted(arg0: boolean): void;
    setInvoker(arg0: Component): void;
    setLabel(arg0: string): void;
    setLightWeightPopupEnabled(arg0: boolean): void;
    setLocation(arg0: number, arg1: number): void;
    setPopupSize(arg0: Dimension): void;
    setPopupSize(arg0: number, arg1: number): void;
    setSelected(arg0: Component): void;
    setSelectionModel(arg0: SingleSelectionModel): void;
    setUI(arg0: PopupMenuUI): void;
    setVisible(arg0: boolean): void;
    show(arg0: Component, arg1: number, arg2: number): void;
    // private showPopup(): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}