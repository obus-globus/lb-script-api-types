import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Flags$FlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$FlagField.d.ts'
import type { Internal$EnumLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class Flags$BooleanFlagField extends Flags$FlagField<boolean> {
    static after(paramarg0: Flags$FlagField<Object>, paramarg1: (Internal$EnumLite | null)[]): Flags$FlagField<Internal$EnumLite>;
    static booleanAfter(paramarg0: Flags$FlagField<Object>): Flags$BooleanFlagField;
    static booleanFirst(): Flags$BooleanFlagField;
    constructor(arg0: number)
    get(arg0: number): boolean;
    toFlags(arg0: boolean): number;
}