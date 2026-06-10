import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Chunk } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { ConnectionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/ConnectionHandler.d.ts'
import type { BlockConnectionProvider } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/blockconnections/providers/BlockConnectionProvider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConnectionData extends Object {
    static blockConnectionProvider: BlockConnectionProvider;
    static clearBlockStorage(paramarg0: UserConnection): void;
    static connect(paramarg0: UserConnection, paramarg1: BlockPosition, paramarg2: number): number;
    static connectBlocks(paramarg0: UserConnection, paramarg1: Chunk): void;
    static connects(paramarg0: number): boolean;
    static getConnectionHandler(paramarg0: number): (param0: UserConnection, param1: BlockPosition, param2: number) => number;
    static getId(paramarg0: string): number;
    static getKeyToId(): Object2IntMap<string>;
    static init(): void;
    static isWelcome(paramarg0: number): boolean;
    static markModified(paramarg0: UserConnection, paramarg1: BlockPosition): void;
    static needStoreBlocks(): boolean;
    static update(paramarg0: UserConnection, paramarg1: BlockPosition): void;
    static updateBlockStorage(paramarg0: UserConnection, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}