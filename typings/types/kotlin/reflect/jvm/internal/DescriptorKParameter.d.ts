import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { ReflectKParameter } from '../../../../kotlin/reflect/jvm/internal/ReflectKParameter.d.ts'
import type { ParameterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ParameterDescriptor.d.ts'
export class DescriptorKParameter extends ReflectKParameter {
    constructor(callable: DescriptorKCallable<Object>, index: number, kind: KParameter$Kind, computeDescriptor: () => ParameterDescriptor)
    readonly annotations: Annotation[];
    readonly callable: DescriptorKCallable<Object>;
    readonly declaresDefaultValue: boolean;
    // private descriptor: ParameterDescriptor;
    // private /*not mapped: */ getDescriptor(): ParameterDescriptor;
    readonly index: number;
    /*not mapped: */ isOptional(): boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly kind: KParameter$Kind;
    readonly name: string | null;
    readonly type: KType;
}