import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ConnectionData$ConnectorInitAction } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/ConnectionData$ConnectorInitAction.d.ts'
import type { ConnectionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/ConnectionHandler.d.ts'
import type { WrappedBlockData } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/WrappedBlockData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractStempConnectionHandler extends Object implements ConnectionHandler {
    constructor(arg0: string)
    // private baseStateId: number;
    // private blockId: (Object | null)[];
    // private stemps: Map<BlockFace, number>;
    connect(arg0: UserConnection, arg1: BlockPosition, arg2: number): number;
    getBlockData(arg0: UserConnection, arg1: BlockPosition): number;
    getInitAction(arg0: string, arg1: string): (param0: WrappedBlockData) => void;
}