import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockSlipperinessMultiplierEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockSlipperinessMultiplierEvent.d.ts'
import type { Block } from '../../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Ice Speed allows you to manipulate slipperiness speed
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/icespeed/IceSpeed.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/icespeed/IceSpeed.kt:30}
 */
export class IceSpeed extends ToggleableValueGroup {
    static INSTANCE: IceSpeed;
    readonly blockSlipperinessMultiplierHandler: EventHook<BlockSlipperinessMultiplierEvent>;
    // private iceBlocks: Block[];
    // private slipperiness: number;
    // private /*not mapped: */ getSlipperiness(): number;
}