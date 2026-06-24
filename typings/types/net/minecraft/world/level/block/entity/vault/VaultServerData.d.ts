import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class VaultServerData extends Object {
    static CODEC: Codec<VaultServerData>;
    static TAG_NAME: string;
    constructor()
    constructor(rewardedPlayers: UUID[], stateUpdatingResumesAt: number, itemsToEject: ItemStack[], totalEjectionsNeeded: number)
    // private isDirty: boolean;
    // private itemsToEject: ItemStack[];
    // private lastInsertFailTimestamp: number;
    // private rewardedPlayers: UUID[];
    // private stateUpdatingResumesAt: number;
    // private totalEjectionsNeeded: number;
    addToRewardedPlayers(player: Player): void;
    ejectionProgress(): number;
    getItemsToEject(): ItemStack[];
    getLastInsertFailTimestamp(): number;
    getNextItemToEject(): ItemStack;
    getRewardedPlayers(): UUID[];
    hasRewardedPlayer(player: Player): boolean;
    // private markChanged(): void;
    markEjectionFinished(): void;
    pauseStateUpdatingUntil(stateUpdatingResumesAt: number): void;
    popNextItemToEject(): ItemStack;
    set(from: VaultServerData): void;
    setItemsToEject(newItemsToEject: ItemStack[]): void;
    setLastInsertFailTimestamp(lastInsertFailTimestamp: number): void;
    stateUpdatingResumesAt(): number;
}