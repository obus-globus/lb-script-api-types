import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { VaultConfig } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultConfig.d.ts'
import type { VaultServerData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultServerData.d.ts'
import type { VaultSharedData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultSharedData.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class VaultBlockEntity$Server extends Object {
    static tick(paramserverLevel: ServerLevel, parampos: BlockPos, paramblockState: BlockState, paramconfig: VaultConfig, paramserverData: VaultServerData, paramsharedData: VaultSharedData): void;
    static tryInsertKey(paramserverLevel: ServerLevel, parampos: BlockPos, paramblockState: BlockState, paramconfig: VaultConfig, paramserverData: VaultServerData, paramsharedData: VaultSharedData, paramplayer: Player, paramstackToInsert: ItemStack): void;
    constructor()
}