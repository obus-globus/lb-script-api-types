import type { ChunkLightStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/storage/ChunkLightStorage.d.ts'
import type { DifficultyStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/storage/DifficultyStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_14 extends ProtocolStorablesBase {
    constructor()
    // private chunkLightStorage: ChunkLightStorage;
    // private difficultyStorage: DifficultyStorage;
    chunkLightStorage(): ChunkLightStorage;
    difficultyStorage(): DifficultyStorage;
}