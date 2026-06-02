import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CreativeModeTabEvents$ModifyOutput } from '../../../../../../net/fabricmc/fabric/api/creativetab/v1/CreativeModeTabEvents$ModifyOutput.d.ts'
import type { CreativeModeTabEvents$ModifyOutputAll } from '../../../../../../net/fabricmc/fabric/api/creativetab/v1/CreativeModeTabEvents$ModifyOutputAll.d.ts'
import type { FabricCreativeModeTabOutput } from '../../../../../../net/fabricmc/fabric/api/creativetab/v1/FabricCreativeModeTabOutput.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { CreativeModeTab } from '../../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
export class CreativeModeTabEvents extends Object {
    static MODIFY_OUTPUT_ALL: Event<(param0: CreativeModeTab, param1: FabricCreativeModeTabOutput) => void>;
    static modifyOutputEvent(paramarg0: ResourceKey<CreativeModeTab>): Event<(param0: FabricCreativeModeTabOutput) => void>;
    private constructor()
}