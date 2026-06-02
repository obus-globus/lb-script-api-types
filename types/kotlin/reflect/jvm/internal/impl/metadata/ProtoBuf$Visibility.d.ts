import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Visibility extends Enum<ProtoBuf$Visibility> implements Internal$EnumLite {
    static INTERNAL: ProtoBuf$Visibility;
    static LOCAL: ProtoBuf$Visibility;
    static PRIVATE: ProtoBuf$Visibility;
    static PRIVATE_TO_THIS: ProtoBuf$Visibility;
    static PROTECTED: ProtoBuf$Visibility;
    static PUBLIC: ProtoBuf$Visibility;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$Visibility;
    static valueOf(paramarg0: string): ProtoBuf$Visibility;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "INTERNAL" | "PRIVATE" | "PROTECTED" | "PUBLIC" | "PRIVATE_TO_THIS" | "LOCAL";
}