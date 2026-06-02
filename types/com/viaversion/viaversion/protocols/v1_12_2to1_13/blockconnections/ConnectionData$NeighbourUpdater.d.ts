import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockChangeRecord1_8 } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord1_8.d.ts'
import type { UserBlockData } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/providers/UserBlockData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConnectionData$NeighbourUpdater extends Object {
    constructor(arg0: UserConnection)
    // private user: UserConnection;
    // private userBlockData: (param0: number, param1: number, param2: number) => kotlin.Int;
    // private updateBlock(arg0: number, arg1: number, arg2: number, arg3: BlockChangeRecord1_8[]): void;
    updateChunkSectionNeighbours(arg0: number, arg1: number, arg2: number): void;
}