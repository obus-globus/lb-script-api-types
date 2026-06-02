import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { LerpFunction } from '../../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
import type { ColorModifier } from '../../../../../net/minecraft/world/attribute/modifier/ColorModifier.d.ts'
export interface ColorModifier$RgbModifier extends Object, ColorModifier<number>{
    argumentCodec(type: EnvironmentAttribute<number>): Codec<number>;
    argumentKeyframeLerp(type: EnvironmentAttribute<number>): LerpFunction<number>;
}