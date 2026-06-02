import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { EnvironmentAttributeMap$Builder } from '../../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap$Builder.d.ts'
import type { DimensionType } from '../../../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
export interface DimensionEvents$ModifyAttributes extends Object{
    modifyDimensionAttributes(arg0: Holder<DimensionType>, arg1: EnvironmentAttributeMap$Builder, arg2: HolderLookup$Provider): void;
}