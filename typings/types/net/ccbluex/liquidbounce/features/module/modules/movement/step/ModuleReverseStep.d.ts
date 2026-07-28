import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * ReverseStep module
 *
 * Allows you to step down blocks faster.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleReverseStep.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleReverseStep.kt:43}
 */
export class ModuleReverseStep extends ClientModule {
    static INSTANCE: ModuleReverseStep;
    // private UNWANTED_BLOCKS: Block[];
    // private initiatedJump: boolean;
    readonly jumpHandler: EventHook<PlayerJumpEvent>;
    // private maximumFallDistance: number;
    // private /*not mapped: */ getMaximumFallDistance(): number;
    // private modes: ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private /*not mapped: */ getUnwantedBlocksBelow(): boolean;
    // private isFallingTooFar(): boolean;
}