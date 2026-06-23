import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
export interface IntegerModifier<Argument extends unknown> extends Object, AttributeModifier<number, Argument>{
    apply(integer: number, argument: Argument): number;
}