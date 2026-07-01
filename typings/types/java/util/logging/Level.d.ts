import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Level extends Object implements Serializable {
    static ALL: Level;
    static CONFIG: Level;
    static FINE: Level;
    static FINER: Level;
    static FINEST: Level;
    static INFO: Level;
    static OFF: Level;
    static SEVERE: Level;
    static WARNING: Level;
    static parse(paramarg0: string): Level;
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: string)
    // private cachedLocale: Locale;
    // private localizedLevelName: string;
    readonly name: string;
    readonly resourceBundleName: string;
    // private value: number;
    // private computeLocalizedLevelName(arg0: Locale): string;
    equals(arg0: Object | null): boolean;
    getCachedLocalizedLevelName(): string;
    getLevelName(): string;
    getLocalizedLevelName(): string;
    getLocalizedName(): string;
    getName(): string;
    getResourceBundleName(): string;
    hashCode(): number;
    intValue(): number;
    // private readResolve(): Object;
    toString(): string;
}