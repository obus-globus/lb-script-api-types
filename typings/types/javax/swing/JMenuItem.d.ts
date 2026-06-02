import type { Component } from '../../java/awt/Component.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { AbstractButton } from '../../javax/swing/AbstractButton.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { ButtonModel } from '../../javax/swing/ButtonModel.d.ts'
import type { Icon } from '../../javax/swing/Icon.d.ts'
import type { KeyStroke } from '../../javax/swing/KeyStroke.d.ts'
import type { MenuElement } from '../../javax/swing/MenuElement.d.ts'
import type { MenuSelectionManager } from '../../javax/swing/MenuSelectionManager.d.ts'
import type { MenuDragMouseEvent } from '../../javax/swing/event/MenuDragMouseEvent.d.ts'
import type { MenuDragMouseListener } from '../../javax/swing/event/MenuDragMouseListener.d.ts'
import type { MenuKeyEvent } from '../../javax/swing/event/MenuKeyEvent.d.ts'
import type { MenuKeyListener } from '../../javax/swing/event/MenuKeyListener.d.ts'
import type { MenuItemUI } from '../../javax/swing/plaf/MenuItemUI.d.ts'
export class JMenuItem extends AbstractButton implements Accessible, MenuElement {
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
    constructor(arg0: Icon)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Icon)
    constructor(arg0: string, arg1: number)
    readonly accelerator: KeyStroke;
    // private isMouseDragged: boolean;
    actionPropertyChanged(arg0: Action, arg1: string): void;
    addMenuDragMouseListener(arg0: MenuDragMouseListener): void;
    addMenuKeyListener(arg0: MenuKeyListener): void;
    alwaysOnTop(): boolean;
    configureAcceleratorFromAction(arg0: Action): void;
    configurePropertiesFromAction(arg0: Action): void;
    fireMenuDragMouseDragged(arg0: MenuDragMouseEvent): void;
    fireMenuDragMouseEntered(arg0: MenuDragMouseEvent): void;
    fireMenuDragMouseExited(arg0: MenuDragMouseEvent): void;
    fireMenuDragMouseReleased(arg0: MenuDragMouseEvent): void;
    fireMenuKeyPressed(arg0: MenuKeyEvent): void;
    fireMenuKeyReleased(arg0: MenuKeyEvent): void;
    fireMenuKeyTyped(arg0: MenuKeyEvent): void;
    getAccelerator(): KeyStroke;
    getAccessibleContext(): AccessibleContext;
    getComponent(): Component;
    getMenuDragMouseListeners(): MenuDragMouseListener[];
    getMenuKeyListeners(): MenuKeyListener[];
    getSubElements(): MenuElement[];
    getUIClassID(): string;
    init(arg0: string, arg1: Icon): void;
    initFocusability(): void;
    isArmed(): boolean;
    largeIconChanged(arg0: Action): void;
    menuSelectionChanged(arg0: boolean): void;
    paramString(): string;
    processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
    processMenuDragMouseEvent(arg0: MenuDragMouseEvent): void;
    processMenuKeyEvent(arg0: MenuKeyEvent): void;
    processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeMenuDragMouseListener(arg0: MenuDragMouseListener): void;
    removeMenuKeyListener(arg0: MenuKeyListener): void;
    setAccelerator(arg0: KeyStroke): void;
    setArmed(arg0: boolean): void;
    setEnabled(arg0: boolean): void;
    setIconFromAction(arg0: Action): void;
    setModel(arg0: ButtonModel): void;
    setUI(arg0: MenuItemUI): void;
    smallIconChanged(arg0: Action): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}