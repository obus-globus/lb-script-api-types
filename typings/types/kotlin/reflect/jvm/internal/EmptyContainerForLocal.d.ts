import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KCallable } from '../../../../kotlin/reflect/KCallable.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { ConstructorDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class EmptyContainerForLocal extends KDeclarationContainerImpl {
    static Companion: KDeclarationContainerImpl$Companion;
    static INSTANCE: EmptyContainerForLocal;
    readonly constructorDescriptors: ConstructorDescriptor[];
    /*not mapped: */ getJClass(): Class<Object>;
    readonly members: KCallable<Object>[];
    // private fail(): void;
    getFunctions(name: Name): FunctionDescriptor[];
    getLocalProperty(index: number): PropertyDescriptor | null;
    getProperties(name: Name): PropertyDescriptor[];
}