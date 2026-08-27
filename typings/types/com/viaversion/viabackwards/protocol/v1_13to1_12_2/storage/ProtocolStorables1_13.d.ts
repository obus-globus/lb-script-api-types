import type { BackwardsBlockStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/storage/BackwardsBlockStorage.d.ts'
import type { NoteBlockStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/storage/NoteBlockStorage.d.ts'
import type { PlayerPositionStorage1_13 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/storage/PlayerPositionStorage1_13.d.ts'
import type { TabCompleteStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/storage/TabCompleteStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_13 extends ProtocolStorablesBase {
    constructor()
    // private backwardsBlockStorage: BackwardsBlockStorage;
    // private noteBlockStorage: NoteBlockStorage;
    // private tabCompleteStorage: TabCompleteStorage;
    backwardsBlockStorage(): BackwardsBlockStorage;
    noteBlockStorage(): NoteBlockStorage;
    playerPositionStorage(): PlayerPositionStorage1_13;
    setPlayerPositionStorage(arg0: PlayerPositionStorage1_13): void;
    tabCompleteStorage(): TabCompleteStorage;
}