import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CreativeModeTabEvents$ModifyOutput } from '../../../../../net/fabricmc/fabric/api/creativetab/v1/CreativeModeTabEvents$ModifyOutput.d.ts'
import type { FabricCreativeModeTabOutput } from '../../../../../net/fabricmc/fabric/api/creativetab/v1/FabricCreativeModeTabOutput.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { CreativeModeTab } from '../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
export class CreativeModeTabEventsImpl extends Object {
    static getModifyOutputEvent(paramarg0: ResourceKey<CreativeModeTab>): Event<(param0: FabricCreativeModeTabOutput) => void>;
    static getOrCreateModifyOutputEvent(paramarg0: ResourceKey<CreativeModeTab>): Event<(param0: FabricCreativeModeTabOutput) => void>;
    constructor()
}