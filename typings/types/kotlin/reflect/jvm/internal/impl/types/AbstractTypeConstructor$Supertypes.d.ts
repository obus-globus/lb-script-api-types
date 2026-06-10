import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class AbstractTypeConstructor$Supertypes extends Object {
    constructor(arg0: KotlinType[])
    readonly allSupertypes: KotlinType[];
    readonly supertypesWithoutCycles: KotlinType[];
    getAllSupertypes(): KotlinType[];
    getSupertypesWithoutCycles(): KotlinType[];
    setSupertypesWithoutCycles(arg0: KotlinType[]): void;
}