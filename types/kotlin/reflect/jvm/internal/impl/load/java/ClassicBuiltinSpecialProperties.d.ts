import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
export class ClassicBuiltinSpecialProperties extends Object {
    static INSTANCE: ClassicBuiltinSpecialProperties;
    private constructor()
    getBuiltinSpecialPropertyGetterName(arg0: CallableMemberDescriptor): string;
    hasBuiltinSpecialPropertyFqName(arg0: CallableMemberDescriptor): boolean;
    // private hasBuiltinSpecialPropertyFqNameImpl(arg0: CallableMemberDescriptor): boolean;
}