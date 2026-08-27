import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { PacketWrapper } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkCoord } from '../../../../../../../net/raphimc/vialegacy/api/model/ChunkCoord.d.ts'
export class ClassicPositionTracker extends Object implements StorableObject {
    constructor()
    readonly pitch: number;
    readonly posX: number;
    readonly posZ: number;
    readonly spawned: boolean;
    readonly stance: number;
    readonly yaw: number;
    getBlockPosition(): BlockPosition;
    getChunkPosition(): ChunkCoord;
    getPitch(): number;
    getPosX(): number;
    getPosZ(): number;
    getStance(): number;
    getYaw(): number;
    isSpawned(): boolean;
    onRemove(): void;
    setPitch(arg0: number): void;
    setPosX(arg0: number): void;
    setPosZ(arg0: number): void;
    setSpawned(arg0: boolean): void;
    setStance(arg0: number): void;
    setYaw(arg0: number): void;
    writeToPacket(arg0: PacketWrapper): void;
}