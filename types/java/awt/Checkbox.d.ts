import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { CheckboxGroup } from '../../java/awt/CheckboxGroup.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { ItemSelectable } from '../../java/awt/ItemSelectable.d.ts'
import type { ItemEvent } from '../../java/awt/event/ItemEvent.d.ts'
import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Checkbox extends Component implements ItemSelectable, Accessible {
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
    constructor(arg0: string)
    constructor(arg0: string, arg1: CheckboxGroup, arg2: boolean)
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean, arg2: CheckboxGroup)
    // private checkboxSerializedDataVersion: number;
    // private group: CheckboxGroup;
    // private itemListener: ItemListener;
    label: string;
    state: boolean;
    addItemListener(arg0: ItemListener): void;
    addNotify(): void;
    constructComponentName(): string;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getCheckboxGroup(): CheckboxGroup;
    getItemListeners(): ItemListener[];
    getLabel(): string;
    getListeners(arg0: Class<T>): T[];
    getSelectedObjects(): Object[];
    getState(): boolean;
    paramString(): string;
    processEvent(arg0: AWTEvent): void;
    processItemEvent(arg0: ItemEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeItemListener(arg0: ItemListener): void;
    setCheckboxGroup(arg0: CheckboxGroup): void;
    setLabel(arg0: string): void;
    setState(arg0: boolean): void;
    setStateInternal(arg0: boolean): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}