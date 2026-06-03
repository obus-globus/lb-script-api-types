import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { AbstractFenceConnectionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/AbstractFenceConnectionHandler.d.ts'
import type { WrappedBlockData } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/WrappedBlockData.d.ts'
export class GlassConnectionHandler extends AbstractFenceConnectionHandler {
    constructor(arg0: string)
    getStates(arg0: UserConnection, arg1: BlockPosition): number;
    getStates(arg0: WrappedBlockData): number;
}