import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubscribedItem } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.d.ts'
import type { UpdateResult } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/UpdateResult.d.ts'
/**
 * The item was (re-)installed to revision {@link revisionId}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt:37}
 */
export class UpdateResult$Updated extends Object implements UpdateResult {
    constructor(item: SubscribedItem, revisionId: number)
    readonly item: SubscribedItem;
    readonly revisionId: number;
    component1(): SubscribedItem;
    component2(): number;
    copy(item: SubscribedItem, revisionId: number): UpdateResult$Updated;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}