import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { AbstractFenceConnectionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/AbstractFenceConnectionHandler.d.ts'
import type { ConnectionData$ConnectorInitAction } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/ConnectionData$ConnectorInitAction.d.ts'
import type { WrappedBlockData } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/WrappedBlockData.d.ts'
export class ChorusPlantConnectionHandler extends AbstractFenceConnectionHandler {
    constructor()
    // private endstone: number;
    connects(arg0: BlockFace, arg1: number, arg2: boolean): boolean;
    // private getExtraAction(): (param0: WrappedBlockData) => void;
    getStates(arg0: UserConnection, arg1: BlockPosition): number;
    getStates(arg0: WrappedBlockData): number;
    statesSize(): number;
}