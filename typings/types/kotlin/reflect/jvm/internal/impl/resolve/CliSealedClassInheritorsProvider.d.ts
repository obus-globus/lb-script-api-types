import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { SealedClassInheritorsProvider } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/SealedClassInheritorsProvider.d.ts'
export class CliSealedClassInheritorsProvider extends SealedClassInheritorsProvider {
    static INSTANCE: CliSealedClassInheritorsProvider;
    private constructor()
    computeSealedSubclasses(arg0: ClassDescriptor, arg1: boolean): ClassDescriptor[];
}