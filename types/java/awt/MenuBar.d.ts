import type { Menu } from '../../java/awt/Menu.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { MenuContainer } from '../../java/awt/MenuContainer.d.ts'
import type { MenuItem } from '../../java/awt/MenuItem.d.ts'
import type { MenuShortcut } from '../../java/awt/MenuShortcut.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class MenuBar extends MenuComponent implements MenuContainer, Accessible {
    constructor()
    readonly helpMenu: Menu;
    // private menuBarSerializedDataVersion: number;
    // private menus: Menu[];
    add(arg0: Menu): Menu;
    addNotify(): void;
    constructComponentName(): string;
    countMenus(): number;
    deleteShortcut(arg0: MenuShortcut): void;
    getAccessibleChildIndex(arg0: MenuComponent): number;
    getAccessibleContext(): AccessibleContext;
    getHelpMenu(): Menu;
    getMenu(arg0: number): Menu;
    getMenuCount(): number;
    getMenuCountImpl(): number;
    getMenuImpl(arg0: number): Menu;
    getShortcutMenuItem(arg0: MenuShortcut): MenuItem;
    handleShortcut(arg0: KeyEvent): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: MenuComponent): void;
    remove(arg0: number): void;
    removeNotify(): void;
    setHelpMenu(arg0: Menu): void;
    shortcuts(): Enumeration<MenuShortcut>;
    // private writeObject(arg0: ObjectOutputStream): void;
}