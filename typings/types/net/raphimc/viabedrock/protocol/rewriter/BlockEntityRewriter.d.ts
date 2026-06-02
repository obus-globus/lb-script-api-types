import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockBlockEntity } from '../../../../../net/raphimc/viabedrock/api/chunk/BedrockBlockEntity.d.ts'
export class BlockEntityRewriter extends Object {
    static isBlockEntity(paramarg0: string): boolean;
    static toJava(paramarg0: UserConnection, paramarg1: number, paramarg2: BedrockBlockEntity): BlockEntity;
    constructor()
}