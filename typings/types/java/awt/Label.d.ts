import type { Component } from '../../java/awt/Component.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class Label extends Component implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    alignment: number;
    text: string;
    addNotify(): void;
    constructComponentName(): string;
    getAccessibleContext(): AccessibleContext;
    getAlignment(): number;
    getText(): string;
    paramString(): string;
    // private readObject(arg0: ObjectInputStream): void;
    setAlignment(arg0: number): void;
    setText(arg0: string): void;
}