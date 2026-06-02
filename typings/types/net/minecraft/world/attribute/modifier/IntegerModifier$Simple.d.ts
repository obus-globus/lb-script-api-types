import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { LerpFunction } from '../../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
import type { IntegerModifier } from '../../../../../net/minecraft/world/attribute/modifier/IntegerModifier.d.ts'
export interface IntegerModifier$Simple extends Object, IntegerModifier<number>{
    argumentCodec(type: EnvironmentAttribute<number>): Codec<number>;
    argumentKeyframeLerp(type: EnvironmentAttribute<number>): LerpFunction<number>;
}