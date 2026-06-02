import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WorldHeightSupport extends Object {
    static handleChunkData(paramarg0: (param0: PacketWrapper) => void): (param0: PacketWrapper) => void;
    static handleJoinGame(paramarg0: (param0: PacketWrapper) => void): (param0: PacketWrapper) => void;
    static handleRespawn(paramarg0: (param0: PacketWrapper) => void): (param0: PacketWrapper) => void;
    static handleUpdateLight(paramarg0: (param0: PacketWrapper) => void): (param0: PacketWrapper) => void;
    constructor()
}