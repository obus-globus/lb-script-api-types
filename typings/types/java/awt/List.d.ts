import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { ItemSelectable } from '../../java/awt/ItemSelectable.d.ts'
import type { MenuComponent } from '../../java/awt/MenuComponent.d.ts'
import type { PopupMenu } from '../../java/awt/PopupMenu.d.ts'
import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { ItemEvent } from '../../java/awt/event/ItemEvent.d.ts'
import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class List extends Component implements ItemSelectable, Accessible {
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
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private actionListener: ActionListener;
    // private itemListener: ItemListener;
    items: string[];
    // private listSerializedDataVersion: number;
    multipleMode: boolean;
    rows: number;
    // private selected: number[];
    visibleIndex: number;
    add(arg0: PopupMenu): void;
    add(arg0: string): void;
    add(arg0: string, arg1: number): void;
    addActionListener(arg0: ActionListener): void;
    addItem(arg0: string): void;
    addItem(arg0: string, arg1: number): void;
    addItemListener(arg0: ItemListener): void;
    addNotify(): void;
    allowsMultipleSelections(): boolean;
    clear(): void;
    constructComponentName(): string;
    countItems(): number;
    delItem(arg0: number): void;
    delItems(arg0: number, arg1: number): void;
    deselect(arg0: number): void;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getActionListeners(): ActionListener[];
    getItem(arg0: number): string;
    getItemCount(): number;
    getItemImpl(arg0: number): string;
    getItemListeners(): ItemListener[];
    getItems(): string[];
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    getMinimumSize(): Dimension;
    getMinimumSize(arg0: number): Dimension;
    getPreferredSize(): Dimension;
    getPreferredSize(arg0: number): Dimension;
    getRows(): number;
    getSelectedIndex(): number;
    getSelectedIndexes(): number[];
    getSelectedItem(): string;
    getSelectedItems(): string[];
    getSelectedObjects(): Object[];
    getVisibleIndex(): number;
    isIndexSelected(arg0: number): boolean;
    isMultipleMode(): boolean;
    isSelected(arg0: number): boolean;
    makeVisible(arg0: number): void;
    minimumSize(): Dimension;
    minimumSize(arg0: number): Dimension;
    paramString(): string;
    preferredSize(): Dimension;
    preferredSize(arg0: number): Dimension;
    processActionEvent(arg0: ActionEvent): void;
    processEvent(arg0: AWTEvent): void;
    processItemEvent(arg0: ItemEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: MenuComponent): void;
    remove(arg0: number): void;
    remove(arg0: string): void;
    removeActionListener(arg0: ActionListener): void;
    removeAll(): void;
    removeItemListener(arg0: ItemListener): void;
    removeNotify(): void;
    replaceItem(arg0: string, arg1: number): void;
    select(arg0: number): void;
    setMultipleMode(arg0: boolean): void;
    setMultipleSelections(arg0: boolean): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}