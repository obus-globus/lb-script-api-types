import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { TextComponent } from '../../java/awt/TextComponent.d.ts'
import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class TextField extends TextComponent {
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
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private actionListener: ActionListener;
    columns: number;
    echoChar: string;
    // private textFieldSerializedDataVersion: number;
    addActionListener(arg0: ActionListener): void;
    addNotify(): void;
    constructComponentName(): string;
    echoCharIsSet(): boolean;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getActionListeners(): ActionListener[];
    getColumns(): number;
    getEchoChar(): string;
    getListeners(arg0: Class<T>): T[];
    getMinimumSize(): Dimension;
    getMinimumSize(arg0: number): Dimension;
    getPreferredSize(): Dimension;
    getPreferredSize(arg0: number): Dimension;
    minimumSize(): Dimension;
    minimumSize(arg0: number): Dimension;
    paramString(): string;
    preferredSize(): Dimension;
    preferredSize(arg0: number): Dimension;
    processActionEvent(arg0: ActionEvent): void;
    processEvent(arg0: AWTEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeActionListener(arg0: ActionListener): void;
    setColumns(arg0: number): void;
    setEchoChar(arg0: string): void;
    setEchoCharacter(arg0: string): void;
    setText(arg0: string): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}