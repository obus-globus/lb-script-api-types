import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ConnectionHandler extends Object{
    connect(arg0: UserConnection, arg1: BlockPosition, arg2: number): number;
    getBlockData(arg0: UserConnection, arg1: BlockPosition): number;
}