import type { Class } from '../../../java/lang/Class.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { ClassFileFormatVersion } from '../../../java/lang/reflect/ClassFileFormatVersion.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class AccessFlag$Location extends Enum<AccessFlag$Location> {
    static CLASS: AccessFlag$Location;
    static FIELD: AccessFlag$Location;
    static INNER_CLASS: AccessFlag$Location;
    static METHOD: AccessFlag$Location;
    static METHOD_PARAMETER: AccessFlag$Location;
    static MODULE: AccessFlag$Location;
    static MODULE_EXPORTS: AccessFlag$Location;
    static MODULE_OPENS: AccessFlag$Location;
    static MODULE_REQUIRES: AccessFlag$Location;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AccessFlag$Location;
    static values(): AccessFlag$Location[];
    private constructor(arg2: number, arg3: Map$Entry<ClassFileFormatVersion, number>[])
    // private flagsMask: number;
    // private historicalFlagsMasks: Map$Entry<ClassFileFormatVersion, number>[];
    flags(): AccessFlag[];
    flags(arg0: ClassFileFormatVersion): AccessFlag[];
    flagsMask(): number;
    flagsMask(arg0: ClassFileFormatVersion): number;
    name(): "CLASS" | "FIELD" | "METHOD" | "INNER_CLASS" | "METHOD_PARAMETER" | "MODULE" | "MODULE_REQUIRES" | "MODULE_EXPORTS" | "MODULE_OPENS";
}