import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorWithVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorWithVisibility.d.ts'
import type { Visibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { ReceiverValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
export abstract class DescriptorVisibility extends Object {
    constructor()
    compareTo(arg0: DescriptorVisibility): number;
    getDelegate(): Visibility;
    getInternalDisplayName(): string;
    isPublicAPI(): boolean;
    isVisible(arg0: ReceiverValue, arg1: DeclarationDescriptorWithVisibility, arg2: DeclarationDescriptor, arg3: boolean): boolean;
    normalize(): DescriptorVisibility;
    toString(): string;
}