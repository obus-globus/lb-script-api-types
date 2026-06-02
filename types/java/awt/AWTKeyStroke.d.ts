import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AWTKeyStroke extends Object implements Serializable {
    static getAWTKeyStroke(paramarg0: string): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: number, paramarg1: number): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: number, paramarg1: number, paramarg2: boolean): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: string, paramarg1: number): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: string): AWTKeyStroke;
    static getAWTKeyStrokeForEvent(paramarg0: KeyEvent): AWTKeyStroke;
    constructor()
    constructor(arg0: string, arg1: number, arg2: number, arg3: boolean)
    readonly keyChar: string;
    readonly keyCode: number;
    readonly modifiers: number;
    readonly onKeyRelease: boolean;
    equals(arg0: Object | null): boolean;
    getKeyChar(): string;
    getKeyCode(): number;
    getKeyEventType(): number;
    getModifiers(): number;
    hashCode(): number;
    isOnKeyRelease(): boolean;
    readResolve(): Object;
    toString(): string;
}