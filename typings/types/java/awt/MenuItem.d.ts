import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { MenuShortcut } from '../../java/awt/MenuShortcut.d.ts'
import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class MenuItem extends MenuComponent implements Accessible {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: MenuShortcut)
    readonly actionCommand: string;
    // private actionListener: ActionListener;
    readonly enabled: boolean;
    // private eventMask: number;
    label: string;
    // private menuItemSerializedDataVersion: number;
    readonly shortcut: MenuShortcut;
    addActionListener(arg0: ActionListener): void;
    addNotify(): void;
    constructComponentName(): string;
    deleteShortcut(): void;
    deleteShortcut(arg0: MenuShortcut): void;
    disable(): void;
    disableEvents(arg0: number): void;
    doMenuEvent(arg0: number, arg1: number): void;
    enable(): void;
    enable(arg0: boolean): void;
    enableEvents(arg0: number): void;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getActionCommand(): string;
    getActionCommandImpl(): string;
    getActionListeners(): ActionListener[];
    getLabel(): string;
    getListeners(arg0: Class<T>): T[];
    getShortcut(): MenuShortcut;
    getShortcutMenuItem(arg0: MenuShortcut): MenuItem;
    handleShortcut(arg0: KeyEvent): boolean;
    isEnabled(): boolean;
    // private isItemEnabled(): boolean;
    paramString(): string;
    processActionEvent(arg0: ActionEvent): void;
    processEvent(arg0: AWTEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeActionListener(arg0: ActionListener): void;
    setActionCommand(arg0: string): void;
    setEnabled(arg0: boolean): void;
    setLabel(arg0: string): void;
    setShortcut(arg0: MenuShortcut): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}