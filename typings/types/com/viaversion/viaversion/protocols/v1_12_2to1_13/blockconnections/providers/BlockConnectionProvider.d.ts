import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Provider } from '../../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { UserBlockData } from '../../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/providers/UserBlockData.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class BlockConnectionProvider extends Object implements Provider {
    constructor()
    clearStorage(arg0: UserConnection): void;
    forUser(arg0: UserConnection): (param0: number, param1: number, param2: number) => number;
    getBlockData(arg0: UserConnection, arg1: number, arg2: number, arg3: number): number;
    getWorldBlockData(arg0: UserConnection, arg1: number, arg2: number, arg3: number): number;
    modifiedBlock(arg0: UserConnection, arg1: BlockPosition): void;
    removeBlock(arg0: UserConnection, arg1: number, arg2: number, arg3: number): void;
    storeBlock(arg0: UserConnection, arg1: number, arg2: number, arg3: number, arg4: number): void;
    storesBlocks(arg0: UserConnection, arg1: BlockPosition): boolean;
    unloadChunk(arg0: UserConnection, arg1: number, arg2: number): void;
    unloadChunkSection(arg0: UserConnection, arg1: number, arg2: number, arg3: number): void;
}