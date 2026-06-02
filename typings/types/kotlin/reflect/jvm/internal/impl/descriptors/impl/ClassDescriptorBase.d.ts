import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AbstractClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractClassDescriptor.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export abstract class ClassDescriptorBase extends AbstractClassDescriptor {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: StorageManager, arg1: DeclarationDescriptor, arg2: Name, arg3: SourceElement, arg4: boolean)
    readonly containingDeclaration: DeclarationDescriptor;
    // private isExternal: boolean;
    readonly source: SourceElement;
    getContainingDeclaration(): DeclarationDescriptor;
    getSource(): SourceElement;
    isExternal(): boolean;
}