import type { Pointer } from '../../com/sun/jna/Pointer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Util extends Object {
    static freeMemory(paramarg0: Pointer): void;
    static isBlank(paramarg0: string): boolean;
    static isBlankOrUnknown(paramarg0: string): boolean;
    static isSessionValid(paramarg0: string, paramarg1: string, paramarg2: number): boolean;
    static sleep(paramarg0: number): void;
    static wildcardMatch(paramarg0: string, paramarg1: string): boolean;
    private constructor()
}