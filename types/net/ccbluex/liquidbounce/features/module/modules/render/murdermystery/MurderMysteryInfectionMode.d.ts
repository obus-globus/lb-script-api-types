import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { UuidBasedMurderMysteryMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/UuidBasedMurderMysteryMode.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
export class MurderMysteryInfectionMode extends UuidBasedMurderMysteryMode {
    static Companion: Tagged$Companion;
    static INSTANCE: MurderMysteryInfectionMode;
    readonly tickHandler: EventHook<GameTickEvent>;
    disallowsArrowDodge(): boolean;
    handleHasSword(entity: AbstractClientPlayer): void;
}