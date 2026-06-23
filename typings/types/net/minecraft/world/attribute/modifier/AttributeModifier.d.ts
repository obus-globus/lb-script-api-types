import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { LerpFunction } from '../../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
export interface AttributeModifier<Subject extends unknown, Argument extends unknown> extends Object{
    apply(subject: Subject, argument: Argument): Subject;
    argumentCodec(attribute: EnvironmentAttribute<Subject>): Codec<Argument>;
    argumentKeyframeLerp(attribute: EnvironmentAttribute<Subject>): LerpFunction<Argument>;
}