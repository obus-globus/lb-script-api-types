import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CreativeModeTab$ItemDisplayParameters } from '../../../../net/minecraft/world/item/CreativeModeTab$ItemDisplayParameters.d.ts'
import type { CreativeModeTab$Output } from '../../../../net/minecraft/world/item/CreativeModeTab$Output.d.ts'
export interface CreativeModeTab$DisplayItemsGenerator extends Object{
    accept(parameters: CreativeModeTab$ItemDisplayParameters, output: CreativeModeTab$Output): void;
}