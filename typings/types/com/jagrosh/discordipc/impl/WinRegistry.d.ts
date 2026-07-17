import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WinRegistry extends Object {
    static HKEY_CURRENT_USER: number;
    static HKEY_LOCAL_MACHINE: number;
    static REG_SUCCESS: number;
    static createKey(paramarg0: number, paramarg1: string): void;
    static deleteKey(paramarg0: number, paramarg1: string): void;
    static deleteValue(paramarg0: number, paramarg1: string, paramarg2: string): void;
    static readString(paramarg0: number, paramarg1: string, paramarg2: string): string;
    static readStringSubKeys(paramarg0: number, paramarg1: string): string[];
    static readStringValues(paramarg0: number, paramarg1: string): JavaMap<string, string>;
    static writeStringValue(paramarg0: number, paramarg1: string, paramarg2: string, paramarg3: string): void;
    private constructor()
}