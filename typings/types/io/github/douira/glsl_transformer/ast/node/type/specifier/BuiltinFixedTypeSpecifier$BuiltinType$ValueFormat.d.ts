import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat extends Enum<BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat> {
    static FLOATING_POINT: BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat;
    static SIGNED_INTEGER: BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat;
    static UNSIGNED_INTEGER: BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat;
    static values(): BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat[];
    private constructor()
    name(): "FLOATING_POINT" | "SIGNED_INTEGER" | "UNSIGNED_INTEGER";
}