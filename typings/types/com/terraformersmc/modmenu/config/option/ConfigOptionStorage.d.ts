import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ConfigOptionStorage extends Object {
    static cycleEnum<E extends Enum<E>>(paramarg0: string, paramarg1: Class<E>): E;
    static cycleEnum<E extends Enum<E>>(paramarg0: string, paramarg1: Class<E>, paramarg2: number): E;
    static getBoolean(paramarg0: string): boolean;
    static getEnum<E extends Enum<E>>(paramarg0: string, paramarg1: Class<E>): E;
    static getEnumTypeless(paramarg0: string, paramarg1: Class<Enum<any>>): Enum<any>;
    static getStringSet(paramarg0: string): string[];
    static setBoolean(paramarg0: string, paramarg1: boolean): void;
    static setEnum<E extends Enum<E>>(paramarg0: string, paramarg1: E): void;
    static setEnumTypeless(paramarg0: string, paramarg1: Enum<any>): void;
    static setStringSet(paramarg0: string, paramarg1: string[]): void;
    static toggleBoolean(paramarg0: string): void;
    constructor()
}