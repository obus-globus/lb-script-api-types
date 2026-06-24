import type { Flags$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Flags$BooleanFlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$BooleanFlagField.d.ts'
import type { Internal$EnumLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export abstract class Flags$FlagField<E extends unknown> extends Object {
    static after(paramarg0: Flags$FlagField<Object>, paramarg1: Object | null): Flags$FlagField<Internal$EnumLite>;
    static booleanAfter(paramarg0: Flags$FlagField<Object>): Flags$BooleanFlagField;
    static booleanFirst(): Flags$BooleanFlagField;
    private constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: Flags$1)
    bitWidth: number;
    offset: number;
    get(arg0: number): E;
    toFlags(arg0: E): number;
}