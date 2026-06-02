import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DimensionEvents$ModifyAttributes } from '../../../../../../net/fabricmc/fabric/api/dimension/v1/DimensionEvents$ModifyAttributes.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { EnvironmentAttributeMap$Builder } from '../../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap$Builder.d.ts'
import type { DimensionType } from '../../../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
export class DimensionEvents extends Object {
    static MODIFY_ATTRIBUTES: Event<(param0: Holder<DimensionType>, param1: EnvironmentAttributeMap$Builder, param2: HolderLookup$Provider) => void>;
    constructor()
}