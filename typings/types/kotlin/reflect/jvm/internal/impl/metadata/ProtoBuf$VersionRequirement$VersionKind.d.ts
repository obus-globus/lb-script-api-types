import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$VersionRequirement$VersionKind extends Enum<ProtoBuf$VersionRequirement$VersionKind> implements Internal$EnumLite {
    static API_VERSION: ProtoBuf$VersionRequirement$VersionKind;
    static COMPILER_VERSION: ProtoBuf$VersionRequirement$VersionKind;
    static LANGUAGE_VERSION: ProtoBuf$VersionRequirement$VersionKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$VersionRequirement$VersionKind;
    static valueOf(paramarg0: string): ProtoBuf$VersionRequirement$VersionKind;
    static values(): ProtoBuf$VersionRequirement$VersionKind[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "LANGUAGE_VERSION" | "COMPILER_VERSION" | "API_VERSION";
}