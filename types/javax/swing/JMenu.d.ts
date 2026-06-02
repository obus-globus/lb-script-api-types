import type { Component } from '../../java/awt/Component.d.ts'
import type { ComponentOrientation } from '../../java/awt/ComponentOrientation.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { ButtonModel } from '../../javax/swing/ButtonModel.d.ts'
import type { JMenu$WinListener } from '../../javax/swing/JMenu$WinListener.d.ts'
import type { JMenuItem } from '../../javax/swing/JMenuItem.d.ts'
import type { JPopupMenu } from '../../javax/swing/JPopupMenu.d.ts'
import type { KeyStroke } from '../../javax/swing/KeyStroke.d.ts'
import type { MenuElement } from '../../javax/swing/MenuElement.d.ts'
import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { MenuEvent } from '../../javax/swing/event/MenuEvent.d.ts'
import type { MenuListener } from '../../javax/swing/event/MenuListener.d.ts'
export class JMenu extends JMenuItem implements Accessible, MenuElement {
    static ABORT: number;
    static ALLBITS: number;
    static BORDER_PAINTED_CHANGED_PROPERTY: string;
    static BOTTOM: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER: number;
    static CENTER_ALIGNMENT: number;
    static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
    static DISABLED_ICON_CHANGED_PROPERTY: string;
    static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
    static EAST: number;
    static ERROR: number;
    static FOCUS_PAINTED_CHANGED_PROPERTY: string;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL: number;
    static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
    static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
    static ICON_CHANGED_PROPERTY: string;
    static LEADING: number;
    static LEFT: number;
    static LEFT_ALIGNMENT: number;
    static MARGIN_CHANGED_PROPERTY: string;
    static MNEMONIC_CHANGED_PROPERTY: string;
    static MODEL_CHANGED_PROPERTY: string;
    static NEXT: number;
    static NORTH: number;
    static NORTH_EAST: number;
    static NORTH_WEST: number;
    static PRESSED_ICON_CHANGED_PROPERTY: string;
    static PREVIOUS: number;
    static PROPERTIES: number;
    static RIGHT: number;
    static RIGHT_ALIGNMENT: number;
    static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
    static ROLLOVER_ICON_CHANGED_PROPERTY: string;
    static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
    static SELECTED_ICON_CHANGED_PROPERTY: string;
    static SOMEBITS: number;
    static SOUTH: number;
    static SOUTH_EAST: number;
    static SOUTH_WEST: number;
    static TEXT_CHANGED_PROPERTY: string;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP: number;
    static TOP_ALIGNMENT: number;
    static TRAILING: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
    static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
    static WEST: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: Action)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private customMenuLocation: Point;
    readonly delay: number;
    // private menuChangeListener: ChangeListener;
    // private menuEvent: MenuEvent;
    // private popupListener: JMenu$WinListener;
    readonly popupMenu: JPopupMenu;
    add(arg0: Component): Component;
    add(arg0: Component, arg1: number): Component;
    add(arg0: Action): JMenuItem;
    add(arg0: JMenuItem): JMenuItem;
    add(arg0: string): JMenuItem;
    addMenuListener(arg0: MenuListener): void;
    addSeparator(): void;
    applyComponentOrientation(arg0: ComponentOrientation): void;
    // private buildMenuElementArray(arg0: JMenu): MenuElement[];
    configureAcceleratorFromAction(arg0: Action): void;
    createActionChangeListener(arg0: JMenuItem): PropertyChangeListener;
    createActionComponent(arg0: Action): JMenuItem;
    // private createMenuChangeListener(): ChangeListener;
    createWinListener(arg0: JPopupMenu): JMenu$WinListener;
    doClick(arg0: number): void;
    // private ensurePopupMenuCreated(): void;
    fireMenuCanceled(): void;
    fireMenuDeselected(): void;
    fireMenuSelected(): void;
    getAccessibleContext(): AccessibleContext;
    getComponent(): Component;
    // private getCustomMenuLocation(): Point;
    getDelay(): number;
    getItem(arg0: number): JMenuItem;
    getItemCount(): number;
    getMenuComponent(arg0: number): Component;
    getMenuComponentCount(): number;
    getMenuComponents(): Component[];
    getMenuListeners(): MenuListener[];
    getPopupMenu(): JPopupMenu;
    getPopupMenuOrigin(): Point;
    getSubElements(): MenuElement[];
    getUIClassID(): string;
    initFocusability(): void;
    insert(arg0: Action, arg1: number): JMenuItem;
    insert(arg0: JMenuItem, arg1: number): JMenuItem;
    insert(arg0: string, arg1: number): void;
    insertSeparator(arg0: number): void;
    isMenuComponent(arg0: Component): boolean;
    isPopupMenuVisible(): boolean;
    isSelected(): boolean;
    isTearOff(): boolean;
    isTopLevelMenu(): boolean;
    menuSelectionChanged(arg0: boolean): void;
    paramString(): string;
    processKeyEvent(arg0: KeyEvent): void;
    remove(arg0: Component): void;
    remove(arg0: JMenuItem): void;
    remove(arg0: number): void;
    removeAll(): void;
    removeMenuListener(arg0: MenuListener): void;
    setAccelerator(arg0: KeyStroke): void;
    setComponentOrientation(arg0: ComponentOrientation): void;
    setDelay(arg0: number): void;
    setMenuLocation(arg0: number, arg1: number): void;
    setModel(arg0: ButtonModel): void;
    setPopupMenuVisible(arg0: boolean): void;
    setSelected(arg0: boolean): void;
    // private translateToPopupMenu(arg0: Point): Point;
    // private translateToPopupMenu(arg0: number, arg1: number): Point;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}