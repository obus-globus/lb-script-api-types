import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { BedrockBlockEntity } from '../../../../../../net/raphimc/viabedrock/api/chunk/BedrockBlockEntity.d.ts'
import type { LootableContainerBlockEntityRewriter } from '../../../../../../net/raphimc/viabedrock/protocol/rewriter/blockentity/LootableContainerBlockEntityRewriter.d.ts'
export class HopperBlockEntityRewriter extends LootableContainerBlockEntityRewriter {
    constructor()
    toJava(arg0: UserConnection, arg1: BedrockBlockEntity): BlockEntity;
}