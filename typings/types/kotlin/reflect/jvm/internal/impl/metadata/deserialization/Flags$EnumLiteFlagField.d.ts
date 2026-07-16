import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Flags$BooleanFlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$BooleanFlagField.d.ts'
import type { Flags$FlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$FlagField.d.ts'
import type { Internal$EnumLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class Flags$EnumLiteFlagField<E extends Internal$EnumLite> extends Flags$FlagField<E> {
    static after<E extends Internal$EnumLite>(paramarg0: Flags$FlagField<Object>, paramarg1: E[]): Flags$FlagField<E>;
    static booleanAfter(paramarg0: Flags$FlagField<Object>): Flags$BooleanFlagField;
    static booleanFirst(): Flags$BooleanFlagField;
    constructor(arg0: number, arg1: E[])
    // private values: E[];
    get(arg0: number): E;
    toFlags(arg0: E): number;
}