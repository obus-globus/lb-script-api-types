import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$QualifiedNameTable$QualifiedName$Kind extends Enum<ProtoBuf$QualifiedNameTable$QualifiedName$Kind> implements Internal$EnumLite {
    static CLASS: ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    static LOCAL: ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    static PACKAGE: ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    static valueOf(paramarg0: string): ProtoBuf$QualifiedNameTable$QualifiedName$Kind;
    static values(): ProtoBuf$QualifiedNameTable$QualifiedName$Kind[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "CLASS" | "PACKAGE" | "LOCAL";
}