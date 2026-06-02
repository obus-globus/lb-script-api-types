import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ConnectionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/ConnectionHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RedstoneConnectionHandler extends Object implements ConnectionHandler {
    constructor()
    connect(arg0: UserConnection, arg1: BlockPosition, arg2: number): number;
    // private connects(arg0: UserConnection, arg1: BlockPosition, arg2: BlockFace): number;
    // private connects(arg0: BlockFace, arg1: number): boolean;
    getBlockData(arg0: UserConnection, arg1: BlockPosition): number;
}