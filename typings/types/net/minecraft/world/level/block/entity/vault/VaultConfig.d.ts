import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { PlayerDetector } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/PlayerDetector.d.ts'
import type { PlayerDetector$EntitySelector } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/PlayerDetector$EntitySelector.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class VaultConfig extends Record {
    static CODEC: Codec<VaultConfig>;
    static DEFAULT: VaultConfig;
    static TAG_NAME: string;
    private constructor()
    constructor(lootTable: ResourceKey<LootTable>, activationRange: number, deactivationRange: number, keyItem: ItemStack, overrideDisplayItems: Optional<ResourceKey<LootTable>>)
    constructor(lootTable: ResourceKey<LootTable>, activationRange: number, deactivationRange: number, keyItem: ItemStack, overrideLootTableToDisplay: Optional<ResourceKey<LootTable>>, playerDetector: PlayerDetector, entitySelector: PlayerDetector$EntitySelector)
    // private activationRange: number;
    // private deactivationRange: number;
    // private entitySelector: PlayerDetector$EntitySelector;
    // private keyItem: ItemStack;
    // private lootTable: ResourceKey<LootTable>;
    // private overrideLootTableToDisplay: Optional<ResourceKey<LootTable>>;
    // private playerDetector: PlayerDetector;
    activationRange(): number;
    deactivationRange(): number;
    entitySelector(): PlayerDetector$EntitySelector;
    equals(o: Object | null): boolean;
    hashCode(): number;
    keyItem(): ItemStack;
    lootTable(): ResourceKey<LootTable>;
    overrideLootTableToDisplay(): Optional<ResourceKey<LootTable>>;
    playerDetector(): PlayerDetector;
    toString(): string;
    // private validate(): DataResult<VaultConfig>;
}