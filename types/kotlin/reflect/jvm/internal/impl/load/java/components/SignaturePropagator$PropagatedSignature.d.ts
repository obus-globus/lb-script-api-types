import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class SignaturePropagator$PropagatedSignature extends Object {
    constructor(arg0: KotlinType, arg1: KotlinType, arg2: ValueParameterDescriptor[], arg3: TypeParameterDescriptor[], arg4: string[], arg5: boolean)
    // private hasStableParameterNames: boolean;
    readonly receiverType: KotlinType;
    readonly returnType: KotlinType;
    // private signatureErrors: string[];
    readonly typeParameters: TypeParameterDescriptor[];
    readonly valueParameters: ValueParameterDescriptor[];
    getErrors(): string[];
    getReceiverType(): KotlinType;
    getReturnType(): KotlinType;
    getTypeParameters(): TypeParameterDescriptor[];
    getValueParameters(): ValueParameterDescriptor[];
    hasStableParameterNames(): boolean;
}