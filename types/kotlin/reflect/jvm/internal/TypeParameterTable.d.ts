import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KTypeParameterImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterImpl.d.ts'
import type { TypeParameterTable$Companion } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable$Companion.d.ts'
export class TypeParameterTable extends Object {
    static Companion: TypeParameterTable$Companion;
    static EMPTY: TypeParameterTable;
    private constructor(ownTypeParameters: KTypeParameterImpl[], map: { [key: number]: KTypeParameter }, parent: TypeParameterTable | null)
    // private map: { [key: number]: KTypeParameter };
    readonly ownTypeParameters: KTypeParameterImpl[];
    // private parent: TypeParameterTable | null;
    get(id: number): KTypeParameter | null;
}