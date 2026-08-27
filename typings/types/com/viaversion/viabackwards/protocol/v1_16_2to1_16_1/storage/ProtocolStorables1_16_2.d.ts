import type { BiomeStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16_2to1_16_1/storage/BiomeStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_16_2 extends ProtocolStorablesBase {
    constructor()
    // private biomeStorage: BiomeStorage;
    biomeStorage(): BiomeStorage;
}