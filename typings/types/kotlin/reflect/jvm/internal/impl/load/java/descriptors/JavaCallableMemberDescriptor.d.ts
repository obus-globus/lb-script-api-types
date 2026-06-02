import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface JavaCallableMemberDescriptor extends Object, CallableMemberDescriptor{
    enhance(arg0: KotlinType, arg1: KotlinType[], arg2: KotlinType, arg3: Pair<CallableDescriptor$UserDataKey<Object>, Object>): JavaCallableMemberDescriptor;
}