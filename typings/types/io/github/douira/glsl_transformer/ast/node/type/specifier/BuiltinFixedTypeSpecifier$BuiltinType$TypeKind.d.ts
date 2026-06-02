import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BuiltinFixedTypeSpecifier$BuiltinType$TypeKind extends Enum<BuiltinFixedTypeSpecifier$BuiltinType$TypeKind> {
    static ACCELERATION_STRUCTURE: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind;
    static ATOMIC_UINT: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind;
    static IMAGE: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind;
    static SAMPLER: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind;
    static VOID: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BuiltinFixedTypeSpecifier$BuiltinType$TypeKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "VOID" | "ATOMIC_UINT" | "SAMPLER" | "IMAGE" | "ACCELERATION_STRUCTURE";
}