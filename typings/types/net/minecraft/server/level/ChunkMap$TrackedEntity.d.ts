import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityTrackerAccessor } from '../../../../net/fabricmc/fabric/mixin/networking/accessor/EntityTrackerAccessor.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { ServerEntity } from '../../../../net/minecraft/server/level/ServerEntity.d.ts'
import type { ServerEntity$Synchronizer } from '../../../../net/minecraft/server/level/ServerEntity$Synchronizer.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ServerPlayerConnection } from '../../../../net/minecraft/server/network/ServerPlayerConnection.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class ChunkMap$TrackedEntity extends Object implements EntityTrackerAccessor, ServerEntity$Synchronizer {
    constructor(null_: ChunkMap, entity: Entity, range: number, updateInterval: number, trackDelta: boolean)
    // private entity: Entity;
    // private lastSectionPos: SectionPos;
    // private range: number;
    readonly seenBy: ServerPlayerConnection[];
    // private serverEntity: ServerEntity;
    broadcastRemoved(): void;
    equals(obj: Object | null): boolean;
    // private getEffectiveRange(): number;
    hashCode(): number;
    removePlayer(player: ServerPlayer): void;
    // private scaledRange(range: number): number;
    sendToTrackingPlayers(packet: Packet<ClientGamePacketListener>): void;
    sendToTrackingPlayersAndSelf(packet: Packet<ClientGamePacketListener>): void;
    sendToTrackingPlayersFiltered(packet: Packet<ClientGamePacketListener>, targetPredicate: (param0: ServerPlayer) => boolean): void;
    updatePlayer(player: ServerPlayer): void;
    updatePlayers(players: ServerPlayer[]): void;
}