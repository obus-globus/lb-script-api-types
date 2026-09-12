import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubscribedItem } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.d.ts'
import type { UpdateResult } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/UpdateResult.d.ts'
/**
 * The item is already on its newest revision.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt:40}
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