import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ConfigOptionStorage extends Object {
    static cycleEnum(paramarg0: string, paramarg1: Class<Object>): Object | null;
    static cycleEnum(paramarg0: string, paramarg1: Class<Object>, paramarg2: number): Object | null;
    static getBoolean(paramarg0: string): boolean;
    static getEnum(paramarg0: string, paramarg1: Class<Object>): Object | null;
    static getEnumTypeless(paramarg0: string, paramarg1: Class<Enum<Object>>): Enum<Object>;
    static getStringSet(paramarg0: string): string[];
    static setBoolean(paramarg0: string, paramarg1: boolean): void;
    static setEnum(paramarg0: string, paramarg1: Object | null): void;
    static setEnumTypeless(paramarg0: string, paramarg1: Enum<Object>): void;
    static setStringSet(paramarg0: string, paramarg1: string[]): void;
    static toggleBoolean(paramarg0: string): void;
    constructor()
}