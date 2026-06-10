import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Color } from '../../java/awt/Color.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { TextEvent } from '../../java/awt/event/TextEvent.d.ts'
import type { TextListener } from '../../java/awt/event/TextListener.d.ts'
import type { InputMethodRequests } from '../../java/awt/im/InputMethodRequests.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class TextComponent extends Component implements Accessible {
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
    constructor(arg0: string)
    // private backgroundSetByClientCode: boolean;
    // private checkForEnableIM: boolean;
    editable: boolean;
    selectionEnd: number;
    selectionStart: number;
    text: string;
    // private textComponentSerializedDataVersion: number;
    // private textListener: TextListener;
    addNotify(): void;
    addTextListener(arg0: TextListener): void;
    areInputMethodsEnabled(): boolean;
    enableInputMethods(arg0: boolean): void;
    // private enableInputMethodsIfNecessary(): void;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getBackground(): Color;
    getCaretPosition(): number;
    getInputMethodRequests(): InputMethodRequests;
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    getSelectedText(): string;
    getSelectionEnd(): number;
    getSelectionStart(): number;
    getText(): string;
    getTextListeners(): TextListener[];
    isEditable(): boolean;
    paramString(): string;
    processEvent(arg0: AWTEvent): void;
    processTextEvent(arg0: TextEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeNotify(): void;
    removeTextListener(arg0: TextListener): void;
    select(arg0: number, arg1: number): void;
    selectAll(): void;
    setBackground(arg0: Color): void;
    setCaretPosition(arg0: number): void;
    setEditable(arg0: boolean): void;
    setSelectionEnd(arg0: number): void;
    setSelectionStart(arg0: number): void;
    setText(arg0: string): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}