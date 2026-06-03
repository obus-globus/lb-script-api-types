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
export class Menu extends MenuItem implements MenuContainer, Accessible {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private isHelpMenu: boolean;
    // private items: MenuItem[];
    // private menuSerializedDataVersion: number;
    readonly tearOff: boolean;
    add(arg0: MenuItem): MenuItem;
    add(arg0: string): void;
    addNotify(): void;
    addSeparator(): void;
    constructComponentName(): string;
    countItems(): number;
    countItemsImpl(): number;
    deleteShortcut(): void;
    deleteShortcut(arg0: MenuShortcut): void;
    getAccessibleChildIndex(arg0: MenuComponent): number;
    getAccessibleContext(): AccessibleContext;
    getItem(arg0: number): MenuItem;
    getItemCount(): number;
    getItemImpl(arg0: number): MenuItem;
    getShortcutMenuItem(arg0: MenuShortcut): MenuItem;
    handleShortcut(arg0: KeyEvent): boolean;
    insert(arg0: MenuItem, arg1: number): void;
    insert(arg0: string, arg1: number): void;
    insertSeparator(arg0: number): void;
    isTearOff(): boolean;
    paramString(): string;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: MenuComponent): void;
    remove(arg0: number): void;
    removeAll(): void;
    removeNotify(): void;
    shortcuts(): Enumeration<MenuShortcut>;
    // private writeObject(arg0: ObjectOutputStream): void;
}