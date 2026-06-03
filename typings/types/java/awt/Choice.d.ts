import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { ItemSelectable } from '../../java/awt/ItemSelectable.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { PopupMenu } from '../../java/awt/PopupMenu.d.ts'
import type { ItemEvent } from '../../java/awt/event/ItemEvent.d.ts'
import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Choice extends Component implements ItemSelectable, Accessible {
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
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    constructor()
    // private choiceSerializedDataVersion: number;
    // private itemListener: ItemListener;
    // private pItems: string[];
    selectedIndex: number;
    add(arg0: PopupMenu): void;
    add(arg0: string): void;
    addItem(arg0: string): void;
    addItemListener(arg0: ItemListener): void;
    addNotify(): void;
    constructComponentName(): string;
    countItems(): number;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getItem(arg0: number): string;
    getItemCount(): number;
    getItemImpl(arg0: number): string;
    getItemListeners(): ItemListener[];
    getListeners(arg0: Class<T>): T[];
    getSelectedIndex(): number;
    getSelectedItem(): string;
    getSelectedObjects(): Object[];
    insert(arg0: string, arg1: number): void;
    // private insertNoInvalidate(arg0: string, arg1: number): void;
    paramString(): string;
    processEvent(arg0: AWTEvent): void;
    processItemEvent(arg0: ItemEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: MenuComponent): void;
    remove(arg0: number): void;
    remove(arg0: string): void;
    removeAll(): void;
    removeItemListener(arg0: ItemListener): void;
    // private removeNoInvalidate(arg0: number): void;
    select(arg0: number): void;
    select(arg0: string): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}