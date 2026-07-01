import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Flags$BooleanFlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$BooleanFlagField.d.ts'
import type { Internal$EnumLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export abstract class Flags$FlagField<E extends unknown> extends Object {
    static after(paramarg0: Flags$FlagField<Object>, paramarg1: Object | null): Flags$FlagField<Internal$EnumLite>;
    static booleanAfter(paramarg0: Flags$FlagField<Object>): Flags$BooleanFlagField;
    static booleanFirst(): Flags$BooleanFlagField;
    constructor(arg0: number, arg1: number, arg2: any)
    bitWidth: number;
    offset: number;
    get(arg0: number): E;
    toFlags(arg0: E): number;
}