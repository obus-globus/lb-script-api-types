import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { VecDeltaCodec } from '../../../../net/minecraft/network/protocol/game/VecDeltaCodec.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ServerEntity$Synchronizer } from '../../../../net/minecraft/server/level/ServerEntity$Synchronizer.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { NewMinecartBehavior } from '../../../../net/minecraft/world/entity/vehicle/minecart/NewMinecartBehavior.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ServerEntity extends Object {
    static FORCED_POS_UPDATE_PERIOD: number;
    constructor(level: ServerLevel, entity: Entity, updateInterval: number, trackDelta: boolean, synchronizer: ServerEntity$Synchronizer)
    // private entity: Entity;
    // private lastPassengers: Entity[];
    readonly lastSentMovement: Vec3;
    readonly lastSentXRot: number;
    readonly lastSentYHeadRot: number;
    readonly lastSentYRot: number;
    // private level: ServerLevel;
    // private positionCodec: VecDeltaCodec;
    // private synchronizer: ServerEntity$Synchronizer;
    // private teleportDelay: number;
    // private tickCount: number;
    // private trackDelta: boolean;
    // private trackedDataValues: SynchedEntityData$DataValue<Object>[];
    // private updateInterval: number;
    // private wasOnGround: boolean;
    // private wasRiding: boolean;
    addPairing(player: ServerPlayer): void;
    getLastSentMovement(): Vec3;
    getLastSentXRot(): number;
    getLastSentYHeadRot(): number;
    getLastSentYRot(): number;
    getPositionBase(): Vec3;
    // private handleMinecartPosRot(newMinecartBehavior: NewMinecartBehavior, yRotn: number, xRotn: number, shouldSendRotation: boolean): void;
    removePairing(player: ServerPlayer): void;
    sendChanges(): void;
    // private sendDirtyEntityData(): void;
    sendPairingData(player: ServerPlayer, broadcast: (param0: Packet<ClientGamePacketListener>) => void): void;
}