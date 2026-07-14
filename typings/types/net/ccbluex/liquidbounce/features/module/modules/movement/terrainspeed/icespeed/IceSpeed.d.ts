import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockSlipperinessMultiplierEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockSlipperinessMultiplierEvent.d.ts'
import type { Block } from '../../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Ice Speed allows you to manipulate slipperiness speed
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/icespeed/IceSpeed.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/icespeed/IceSpeed.kt:33}
 */
export class IceSpeed extends ToggleableValueGroup {
    static INSTANCE: IceSpeed;
    readonly blockSlipperinessMultiplierHandler: EventHook<BlockSlipperinessMultiplierEvent>;
    // private iceBlocks: Block[];
    // private slipperiness: number;
    // private /*not mapped: */ getSlipperiness(): number;
}