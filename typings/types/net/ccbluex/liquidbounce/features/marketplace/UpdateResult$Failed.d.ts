import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { SubscribedItem } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.d.ts'
import type { UpdateResult } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/UpdateResult.d.ts'
/**
 * The update failed with {@link error}; the item was left untouched on its old revision.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt:43}
 */
export class UpdateResult$Failed extends Object implements UpdateResult {
    constructor(item: SubscribedItem, error: Throwable)
    readonly error: Throwable;
    readonly item: SubscribedItem;
    component1(): SubscribedItem;
    component2(): Throwable;
    copy(item: SubscribedItem, error: Throwable): UpdateResult$Failed;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}