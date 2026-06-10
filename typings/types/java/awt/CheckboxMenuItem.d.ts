import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { ItemSelectable } from '../../java/awt/ItemSelectable.d.ts'
import type { MenuItem } from '../../java/awt/MenuItem.d.ts'
import type { ItemEvent } from '../../java/awt/event/ItemEvent.d.ts'
import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CheckboxMenuItem extends MenuItem implements ItemSelectable, Accessible {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private checkboxMenuItemSerializedDataVersion: number;
    // private itemListener: ItemListener;
    readonly state: boolean;
    addItemListener(arg0: ItemListener): void;
    addNotify(): void;
    constructComponentName(): string;
    doMenuEvent(arg0: number, arg1: number): void;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getItemListeners(): ItemListener[];
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    getSelectedObjects(): Object[];
    getState(): boolean;
    paramString(): string;
    processEvent(arg0: AWTEvent): void;
    processItemEvent(arg0: ItemEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeItemListener(arg0: ItemListener): void;
    setState(arg0: boolean): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}