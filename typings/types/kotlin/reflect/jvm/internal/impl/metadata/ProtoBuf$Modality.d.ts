import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Modality extends Enum<ProtoBuf$Modality> implements Internal$EnumLite {
    static ABSTRACT: ProtoBuf$Modality;
    static FINAL: ProtoBuf$Modality;
    static OPEN: ProtoBuf$Modality;
    static SEALED: ProtoBuf$Modality;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): ProtoBuf$Modality;
    static valueOf(paramarg0: string): ProtoBuf$Modality;
    static values(): ProtoBuf$Modality[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "FINAL" | "OPEN" | "ABSTRACT" | "SEALED";
}