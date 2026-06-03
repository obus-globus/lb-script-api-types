import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { ReflectKParameter } from '../../../../kotlin/reflect/jvm/internal/ReflectKParameter.d.ts'
import type { ParameterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ParameterDescriptor.d.ts'
export class DescriptorKParameter extends Object implements ReflectKParameter {
    constructor(callable: DescriptorKCallable<Object>, index: number, kind: KParameter$Kind, computeDescriptor: () => ParameterDescriptor)
    // private compoundType(types: Type[]): Type;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}