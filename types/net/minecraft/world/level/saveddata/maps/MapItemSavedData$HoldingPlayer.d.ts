import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { MapId } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData$MapPatch } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData$MapPatch.d.ts'
export class MapItemSavedData$HoldingPlayer extends Object {
    private constructor(null_: MapItemSavedData$HoldingPlayer, player: Player)
    // private dirtyData: boolean;
    // private dirtyDecorations: boolean;
    // private maxDirtyX: number;
    // private maxDirtyY: number;
    // private minDirtyX: number;
    // private minDirtyY: number;
    player: Player;
    step: number;
    // private tick: number;
    // private createPatch(): MapItemSavedData$MapPatch;
    // private markColorsDirty(x: number, y: number): void;
    // private markDecorationsDirty(): void;
    // private nextUpdatePacket(id: MapId): Packet<Object>;
}