import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { PacketWrapper } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkCoord } from '../../../../../../../net/raphimc/vialegacy/api/model/ChunkCoord.d.ts'
export class ClassicPositionTracker extends Object implements StorableObject {
    constructor()
    pitch: number;
    posX: number;
    posZ: number;
    spawned: boolean;
    stance: number;
    yaw: number;
    getBlockPosition(): BlockPosition;
    getChunkPosition(): ChunkCoord;
    onRemove(): void;
    writeToPacket(arg0: PacketWrapper): void;
}