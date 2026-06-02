import type { UUID } from '../../../../../../../../java/util/UUID.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { MurderMysteryMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/MurderMysteryMode.d.ts'
import type { MurderMysteryMode$PlayerType } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/MurderMysteryMode$PlayerType.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { PlayerInfo } from '../../../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
import type { LocalPlayer } from '../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { MapId } from '../../../../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
export class MurderMysteryAssassinationMode extends MurderMysteryMode {
    static Companion: Tagged$Companion;
    static INSTANCE: MurderMysteryAssassinationMode;
    // private currentAssassin: UUID | null;
    // private currentAssassinationTarget: UUID | null;
    // private lastMap: MapId | null;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private assassinModeBs(player: LocalPlayer, world: ClientLevel): void;
    // private calculateDistanceFromWarningVolume(volume: number): number;
    // private findPlayerWithClosestName(name: string, player: LocalPlayer): PlayerInfo | null;
    getPlayerType(player: AbstractClientPlayer): MurderMysteryMode$PlayerType;
    handleHasBow(entity: AbstractClientPlayer): void;
    handleHasSword(entity: AbstractClientPlayer): void;
    reset(): void;
    shouldAttack(entity: AbstractClientPlayer): boolean;
}