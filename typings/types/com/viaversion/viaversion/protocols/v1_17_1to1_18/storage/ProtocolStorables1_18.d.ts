import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ChunkLightStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/storage/ChunkLightStorage.d.ts'
export class ProtocolStorables1_18 extends ProtocolStorablesBase {
    constructor()
    // private chunkLightStorage: ChunkLightStorage;
    chunkLightStorage(): ChunkLightStorage;
}