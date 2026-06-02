import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ConnectionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/ConnectionHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class VineConnectionHandler extends Object implements ConnectionHandler {
    constructor()
    connect(arg0: UserConnection, arg1: BlockPosition, arg2: number): number;
    getBlockData(arg0: UserConnection, arg1: BlockPosition): number;
    // private isAttachedToBlock(arg0: UserConnection, arg1: BlockPosition): boolean;
    // private isAttachedToBlock(arg0: UserConnection, arg1: BlockPosition, arg2: BlockFace): boolean;
}