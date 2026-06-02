import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class EmptyContainerForLocal extends KDeclarationContainerImpl {
    static Companion: KDeclarationContainerImpl$Companion;
    static INSTANCE: EmptyContainerForLocal;
    readonly constructorDescriptors: E[];
    /*not mapped: */ getJClass(): Class<Object>;
    readonly members: E[];
    // private fail(): void;
    getFunctions(name: Name): E[];
    getLocalProperty(index: number): PropertyDescriptor | null;
    getProperties(name: Name): E[];
}