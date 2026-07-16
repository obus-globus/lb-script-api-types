import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$VersionRequirement$Level extends Enum<ProtoBuf$VersionRequirement$Level> implements Internal$EnumLite {
    static ERROR: ProtoBuf$VersionRequirement$Level;
    static HIDDEN: ProtoBuf$VersionRequirement$Level;
    static WARNING: ProtoBuf$VersionRequirement$Level;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$VersionRequirement$Level;
    static valueOf(paramarg0: string): ProtoBuf$VersionRequirement$Level;
    static values(): ProtoBuf$VersionRequirement$Level[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "WARNING" | "ERROR" | "HIDDEN";
}