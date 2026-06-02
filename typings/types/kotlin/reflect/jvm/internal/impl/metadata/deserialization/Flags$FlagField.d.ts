import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Flags$BooleanFlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$BooleanFlagField.d.ts'
export abstract class Flags$FlagField<E extends Object | number | string | boolean> extends Object {
    static after(paramarg0: Flags$FlagField<Object>, paramarg1: Object | null): Flags$FlagField<Object>;
    static booleanAfter(paramarg0: Flags$FlagField<Object>): Flags$BooleanFlagField;
    static booleanFirst(): Flags$BooleanFlagField;
    private constructor(arg0: number, arg1: number)
    bitWidth: number;
    offset: number;
    get(arg0: number): E;
    toFlags(arg0: E): number;
}