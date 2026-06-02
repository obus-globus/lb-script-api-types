import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { SignaturePropagator$PropagatedSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/components/SignaturePropagator$PropagatedSignature.d.ts'
import type { JavaMethod } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface SignaturePropagator extends Object{
    reportSignatureErrors(arg0: CallableMemberDescriptor, arg1: string[]): void;
    resolvePropagatedSignature(arg0: JavaMethod, arg1: ClassDescriptor, arg2: KotlinType, arg3: KotlinType, arg4: ValueParameterDescriptor[], arg5: TypeParameterDescriptor[]): SignaturePropagator$PropagatedSignature;
}