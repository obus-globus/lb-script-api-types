import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricCreativeModeTabOutput } from '../../../../../../net/fabricmc/fabric/api/creativetab/v1/FabricCreativeModeTabOutput.d.ts'
import type { CreativeModeTab } from '../../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
export interface CreativeModeTabEvents$ModifyOutputAll extends Object{
    modifyOutput(arg0: CreativeModeTab, arg1: FabricCreativeModeTabOutput): void;
}