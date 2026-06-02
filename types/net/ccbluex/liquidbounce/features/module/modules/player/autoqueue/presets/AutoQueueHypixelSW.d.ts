import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { AutoQueueHypixelSW$SkyWarsGameMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/presets/AutoQueueHypixelSW$SkyWarsGameMode.d.ts'
export class AutoQueueHypixelSW extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueHypixelSW;
    // private gameMode: AutoQueueHypixelSW$SkyWarsGameMode;
    // private /*not mapped: */ getGameMode(): AutoQueueHypixelSW$SkyWarsGameMode;
    // private /*not mapped: */ getHasPaper(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
}