import type { UUID } from '../../../../../../../../java/util/UUID.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MurderMysteryMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/MurderMysteryMode.d.ts'
import type { MurderMysteryMode$PlayerType } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/MurderMysteryMode$PlayerType.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
export class UuidBasedMurderMysteryMode extends MurderMysteryMode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    // private bowPlayers: UUID[];
    // private /*not mapped: */ getBowPlayers(): UUID[];
    // private currentPlayerType: MurderMysteryMode$PlayerType;
    // private /*not mapped: */ getCurrentPlayerType(): MurderMysteryMode$PlayerType;
    // private murdererPlayers: UUID[];
    // private /*not mapped: */ getMurdererPlayers(): UUID[];
    readonly repeatable: EventHook<GameTickEvent>;
    getPlayerType(player: AbstractClientPlayer): MurderMysteryMode$PlayerType;
    handleHasBow(entity: AbstractClientPlayer): void;
    reset(): void;
    shouldAttack(entity: AbstractClientPlayer): boolean;
}