import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class TypeIntersector extends Object {
    static INSTANCE: TypeIntersector;
    private constructor()
    // private filterTypes(arg0: SimpleType[], arg1: (param0: SimpleType, param1: SimpleType) => boolean): SimpleType[];
    intersectTypes$org_jetbrains_kotlin_descriptors(arg0: SimpleType[]): SimpleType;
    // private intersectTypesWithoutIntersectionType(arg0: SimpleType[]): SimpleType;
    // private isStrictSupertype(arg0: KotlinType, arg1: KotlinType): boolean;
}