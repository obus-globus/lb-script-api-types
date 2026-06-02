import type { AWTKeyStroke } from '../../java/awt/AWTKeyStroke.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
export class KeyStroke extends AWTKeyStroke {
    static getAWTKeyStroke(paramarg0: string): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: number, paramarg1: number): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: number, paramarg1: number, paramarg2: boolean): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: string, paramarg1: number): AWTKeyStroke;
    static getAWTKeyStroke(paramarg0: string): AWTKeyStroke;
    static getAWTKeyStrokeForEvent(paramarg0: KeyEvent): AWTKeyStroke;
    static getKeyStroke(paramarg0: string): KeyStroke;
    static getKeyStroke(paramarg0: string, paramarg1: boolean): KeyStroke;
    static getKeyStroke(paramarg0: number, paramarg1: number): KeyStroke;
    static getKeyStroke(paramarg0: number, paramarg1: number, paramarg2: boolean): KeyStroke;
    static getKeyStroke(paramarg0: string, paramarg1: number): KeyStroke;
    static getKeyStroke(paramarg0: string): KeyStroke;
    static getKeyStrokeForEvent(paramarg0: KeyEvent): KeyStroke;
    private constructor()
    private constructor(arg0: string, arg1: number, arg2: number, arg3: boolean)
}