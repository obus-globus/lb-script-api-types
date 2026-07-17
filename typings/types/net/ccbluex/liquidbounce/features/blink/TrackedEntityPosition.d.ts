import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { VecDeltaCodec } from '../../../../../net/minecraft/network/protocol/game/VecDeltaCodec.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrackedEntityPosition extends Object {
    constructor(entity: Entity)
    constructor(initialPos?: Vec3)
    base: Vec3;
    // private codec: VecDeltaCodec;
    handlePacket(packet: Packet<any>, level: ClientLevel, target: Entity): Vec3 | null;
    setBaseFrom(entity: Entity): void;
}