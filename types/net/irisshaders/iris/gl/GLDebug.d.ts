import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class GLDebug extends Object {
    static disableDebugMessages(): number;
    static filterStackTrace(paramarg0: Throwable, paramarg1: number): Throwable;
    static nameObject(paramarg0: number, paramarg1: number, paramarg2: string): void;
    static popGroup(): void;
    static pushGroup(paramarg0: number, paramarg1: string): void;
    static reloadDebugState(): void;
    static setupDebugMessageCallback(): number;
    static setupDebugMessageCallback(paramarg0: PrintStream): number;
    constructor()
}