import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ConnectionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/ConnectionHandler.d.ts'
import type { StairConnectionHandler$StairData } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/StairConnectionHandler$StairData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StairConnectionHandler extends Object implements ConnectionHandler {
    constructor()
    // private checkOpposite(arg0: UserConnection, arg1: StairConnectionHandler$StairData, arg2: BlockPosition, arg3: BlockFace): boolean;
    connect(arg0: UserConnection, arg1: BlockPosition, arg2: number): number;
    getBlockData(arg0: UserConnection, arg1: BlockPosition): number;
    // private getShape(arg0: UserConnection, arg1: BlockPosition, arg2: StairConnectionHandler$StairData): number;
    // private rotateAntiClockwise(arg0: BlockFace): BlockFace;
}