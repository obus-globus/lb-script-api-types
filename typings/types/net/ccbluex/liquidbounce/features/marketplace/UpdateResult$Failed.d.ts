import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { SubscribedItem } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.d.ts'
import type { UpdateResult } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/UpdateResult.d.ts'
/**
 * The update failed with {@link error}; the item was left untouched on its old revision.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt:43}
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