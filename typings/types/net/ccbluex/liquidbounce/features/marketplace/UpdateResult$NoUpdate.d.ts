import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubscribedItem } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.d.ts'
import type { UpdateResult } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/UpdateResult.d.ts'
/**
 * The item is already on its newest revision.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt:40}
 */
export class UpdateResult$NoUpdate extends Object implements UpdateResult {
    constructor(item: SubscribedItem)
    readonly item: SubscribedItem;
    component1(): SubscribedItem;
    copy(item: SubscribedItem): UpdateResult$NoUpdate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}