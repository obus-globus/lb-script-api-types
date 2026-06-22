import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export abstract class ClassifierBasedTypeConstructor extends Object implements TypeConstructor {
    constructor()
    // private hashCode: number;
    areFqNamesEqual(arg0: ClassifierDescriptor, arg1: ClassifierDescriptor): boolean;
    equals(arg0: Object | null): boolean;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    // private hasMeaningfulFqName(arg0: ClassifierDescriptor): boolean;
    hashCode(): number;
    isDenotable(): boolean;
    isSameClassifier(arg0: ClassifierDescriptor): boolean;
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
}