import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class LazyJavaScope$MethodSignatureData extends Object {
    constructor(arg0: KotlinType, arg1: KotlinType, arg2: ValueParameterDescriptor[], arg3: TypeParameterDescriptor[], arg4: boolean, arg5: string[])
    readonly errors: string[];
    readonly hasStableParameterNames: boolean;
    readonly receiverType: KotlinType;
    readonly returnType: KotlinType;
    readonly typeParameters: TypeParameterDescriptor[];
    readonly valueParameters: ValueParameterDescriptor[];
    equals(arg0: Object | null): boolean;
    getErrors(): string[];
    getHasStableParameterNames(): boolean;
    getReceiverType(): KotlinType;
    getReturnType(): KotlinType;
    getTypeParameters(): TypeParameterDescriptor[];
    getValueParameters(): ValueParameterDescriptor[];
    hashCode(): number;
    toString(): string;
}