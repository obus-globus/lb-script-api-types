import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorWithVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorWithVisibility.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Visibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { ReceiverValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
export class DescriptorVisibilities extends Object {
    static ALWAYS_SUITABLE_RECEIVER: ReceiverValue;
    static DEFAULT_VISIBILITY: DescriptorVisibility;
    static FALSE_IF_PROTECTED: ReceiverValue;
    static INHERITED: DescriptorVisibility;
    static INTERNAL: DescriptorVisibility;
    static INVISIBLE_FAKE: DescriptorVisibility;
    static INVISIBLE_FROM_OTHER_MODULES: DescriptorVisibility[];
    static LOCAL: DescriptorVisibility;
    static PRIVATE: DescriptorVisibility;
    static PRIVATE_TO_THIS: DescriptorVisibility;
    static PROTECTED: DescriptorVisibility;
    static PUBLIC: DescriptorVisibility;
    static UNKNOWN: DescriptorVisibility;
    static compare(paramarg0: DescriptorVisibility, paramarg1: DescriptorVisibility): number;
    static findInvisibleMember(paramarg0: ReceiverValue, paramarg1: DeclarationDescriptorWithVisibility, paramarg2: DeclarationDescriptor, paramarg3: boolean): DeclarationDescriptorWithVisibility;
    static inSameFile(paramarg0: DeclarationDescriptor, paramarg1: DeclarationDescriptor): boolean;
    static isPrivate(paramarg0: DescriptorVisibility): boolean;
    static isVisibleIgnoringReceiver(paramarg0: DeclarationDescriptorWithVisibility, paramarg1: DeclarationDescriptor, paramarg2: boolean): boolean;
    static toDescriptorVisibility(paramarg0: Visibility): DescriptorVisibility;
}