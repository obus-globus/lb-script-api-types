import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { VaultConfig } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultConfig.d.ts'
import type { VaultServerData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultServerData.d.ts'
export class VaultSharedData extends Object {
    static CODEC: Codec<VaultSharedData>;
    static TAG_NAME: string;
    constructor()
    constructor(displayItem: ItemStack, connectedPlayers: UUID[], connectedParticlesRange: number)
    // private connectedParticlesRange: number;
    // private connectedPlayers: UUID[];
    readonly displayItem: ItemStack;
    // private isDirty: boolean;
    connectedParticlesRange(): number;
    getConnectedPlayers(): UUID[];
    getDisplayItem(): ItemStack;
    hasConnectedPlayers(): boolean;
    hasDisplayItem(): boolean;
    // private markDirty(): void;
    set(from: VaultSharedData): void;
    setDisplayItem(stack: ItemStack): void;
    updateConnectedPlayersWithinRange(serverLevel: ServerLevel, pos: BlockPos, serverData: VaultServerData, config: VaultConfig, limit: number): void;
}