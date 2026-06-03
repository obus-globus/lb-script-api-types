import type { Component } from '../../java/awt/Component.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { PopupMenu } from '../../java/awt/PopupMenu.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { JMenu } from '../../javax/swing/JMenu.d.ts'
import type { KeyStroke } from '../../javax/swing/KeyStroke.d.ts'
import type { MenuElement } from '../../javax/swing/MenuElement.d.ts'
import type { MenuSelectionManager } from '../../javax/swing/MenuSelectionManager.d.ts'
import type { SingleSelectionModel } from '../../javax/swing/SingleSelectionModel.d.ts'
import type { ComponentUI } from '../../javax/swing/plaf/ComponentUI.d.ts'
import type { MenuBarUI } from '../../javax/swing/plaf/MenuBarUI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JMenuBar extends JComponent implements Accessible, MenuElement {
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
    readonly margin: Insets;
    // private paintBorder: boolean;
    readonly selectionModel: SingleSelectionModel;
    add(arg0: Component): Component;
    add(arg0: Component, arg1: Object): void;
    add(arg0: Component, arg1: Object, arg2: number): void;
    add(arg0: Component, arg1: number): Component;
    add(arg0: PopupMenu): void;
    add(arg0: JMenu): JMenu;
    add(arg0: string, arg1: Component): Component;
    addNotify(): void;
    getAccessibleContext(): AccessibleContext;
    getComponent(): Component;
    getComponent(arg0: number): Component;
    getComponentAtIndex(arg0: number): Component;
    getComponentIndex(arg0: Component): number;
    getHelpMenu(): JMenu;
    getMargin(): Insets;
    getMenu(arg0: number): JMenu;
    getMenuCount(): number;
    getSelectionModel(): SingleSelectionModel;
    getSubElements(): MenuElement[];
    getUI(): MenuBarUI;
    getUIClassID(): string;
    isBorderPainted(): boolean;
    isSelected(): boolean;
    menuSelectionChanged(arg0: boolean): void;
    paintBorder(arg0: Graphics): void;
    paramString(): string;
    processKeyBinding(arg0: KeyStroke, arg1: KeyEvent, arg2: number, arg3: boolean): boolean;
    processKeyEvent(arg0: KeyEvent): void;
    processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
    processMouseEvent(arg0: MouseEvent): void;
    processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeNotify(): void;
    setBorderPainted(arg0: boolean): void;
    setHelpMenu(arg0: JMenu): void;
    setMargin(arg0: Insets): void;
    setSelected(arg0: Component): void;
    setSelectionModel(arg0: SingleSelectionModel): void;
    setUI(arg0: ComponentUI): void;
    setUI(arg0: MenuBarUI): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}