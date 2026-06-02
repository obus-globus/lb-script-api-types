import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Allows the crystal aura to send a break packet right when a crystal is placed by predicting the
 * expected entity id.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleIdPredict.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleIdPredict.kt:40}
 */
export class SubmoduleIdPredict extends ToggleableValueGroup {
    static INSTANCE: SubmoduleIdPredict;
    // private entitySpawnHandler: EventHook<PacketEvent>;
    // private highestId: number;
    // private offsetRange: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getOffsetRange(): { start: number; endInclusive: number; step: number };
    // private swingAlways: boolean;
    // private /*not mapped: */ getSwingAlways(): boolean;
    readonly worldChangeHandler: EventHook<WorldChangeEvent>;
    onEnabled(): void;
    // private reset(): void;
    run(placePos: BlockPos): void;
}