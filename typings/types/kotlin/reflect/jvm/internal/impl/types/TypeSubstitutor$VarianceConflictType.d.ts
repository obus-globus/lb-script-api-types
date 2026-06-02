import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TypeSubstitutor$VarianceConflictType extends Enum<TypeSubstitutor$VarianceConflictType> {
    static IN_IN_OUT_POSITION: TypeSubstitutor$VarianceConflictType;
    static NO_CONFLICT: TypeSubstitutor$VarianceConflictType;
    static OUT_IN_IN_POSITION: TypeSubstitutor$VarianceConflictType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeSubstitutor$VarianceConflictType;
    static values(): (Object | null)[];
    private constructor()
    name(): "NO_CONFLICT" | "IN_IN_OUT_POSITION" | "OUT_IN_IN_POSITION";
}