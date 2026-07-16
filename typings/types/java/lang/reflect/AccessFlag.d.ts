import type { Class } from '../../../java/lang/Class.d.ts'
import type { AccessFlag$Location } from '../../../java/lang/reflect/AccessFlag$Location.d.ts'
import type { ClassFileFormatVersion } from '../../../java/lang/reflect/ClassFileFormatVersion.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class AccessFlag extends Enum<AccessFlag> {
    static ABSTRACT: AccessFlag;
    static ANNOTATION: AccessFlag;
    static BRIDGE: AccessFlag;
    static ENUM: AccessFlag;
    static FINAL: AccessFlag;
    static INTERFACE: AccessFlag;
    static MANDATED: AccessFlag;
    static MODULE: AccessFlag;
    static NATIVE: AccessFlag;
    static OPEN: AccessFlag;
    static PRIVATE: AccessFlag;
    static PROTECTED: AccessFlag;
    static PUBLIC: AccessFlag;
    static STATIC: AccessFlag;
    static STATIC_PHASE: AccessFlag;
    static STRICT: AccessFlag;
    static SUPER: AccessFlag;
    static SYNCHRONIZED: AccessFlag;
    static SYNTHETIC: AccessFlag;
    static TRANSIENT: AccessFlag;
    static TRANSITIVE: AccessFlag;
    static VARARGS: AccessFlag;
    static VOLATILE: AccessFlag;
    static maskToAccessFlags(paramarg0: number, paramarg1: AccessFlag$Location): AccessFlag[];
    static maskToAccessFlags(paramarg0: number, paramarg1: AccessFlag$Location, paramarg2: ClassFileFormatVersion): AccessFlag[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AccessFlag;
    static values(): AccessFlag[];
    private constructor(arg2: number, arg3: boolean, arg4: AccessFlag$Location[], arg5: Map$Entry<ClassFileFormatVersion, AccessFlag$Location[]>[])
    // private historicalLocations: Map$Entry<ClassFileFormatVersion, AccessFlag$Location[]>[];
    // private locations: AccessFlag$Location[];
    // private mask: number;
    // private sourceModifier: boolean;
    locations(): AccessFlag$Location[];
    locations(arg0: ClassFileFormatVersion): AccessFlag$Location[];
    mask(): number;
    sourceModifier(): boolean;
    name(): "PUBLIC" | "PRIVATE" | "PROTECTED" | "STATIC" | "FINAL" | "SUPER" | "OPEN" | "TRANSITIVE" | "SYNCHRONIZED" | "STATIC_PHASE" | "VOLATILE" | "BRIDGE" | "TRANSIENT" | "VARARGS" | "NATIVE" | "INTERFACE" | "ABSTRACT" | "STRICT" | "SYNTHETIC" | "ANNOTATION" | "ENUM" | "MANDATED" | "MODULE";
}