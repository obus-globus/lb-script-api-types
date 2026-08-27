import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { BlockConnectionStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/storage/BlockConnectionStorage.d.ts'
import type { BlockStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/storage/BlockStorage.d.ts'
import type { TabCompleteTracker } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/storage/TabCompleteTracker.d.ts'
export class ProtocolStorables1_13 extends ProtocolStorablesBase {
    constructor()
    // private blockStorage: BlockStorage;
    // private tabCompleteTracker: TabCompleteTracker;
    blockConnectionStorage(): BlockConnectionStorage;
    blockStorage(): BlockStorage;
    setBlockConnectionStorage(arg0: BlockConnectionStorage): void;
    tabCompleteTracker(): TabCompleteTracker;
}