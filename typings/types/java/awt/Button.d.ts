import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class Button extends Component implements Accessible {
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
    actionCommand: string;
    // private actionListener: ActionListener;
    // private buttonSerializedDataVersion: number;
    label: string;
    addActionListener(arg0: ActionListener): void;
    addNotify(): void;
    constructComponentName(): string;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getActionCommand(): string;
    getActionListeners(): ActionListener[];
    getLabel(): string;
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    paramString(): string;
    processActionEvent(arg0: ActionEvent): void;
    processEvent(arg0: AWTEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeActionListener(arg0: ActionListener): void;
    setActionCommand(arg0: string): void;
    setLabel(arg0: string): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}