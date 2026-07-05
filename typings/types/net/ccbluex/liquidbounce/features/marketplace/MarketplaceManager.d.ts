import type { File } from '../../../../../java/io/File.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { MarketplaceItem } from '../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItem.d.ts'
import type { MarketplaceItemType } from '../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemType.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { SubscribedItem } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.d.ts'
import type { Task } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * Marketplace manager for subscribing and updating items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt:40}
 */
export class MarketplaceManager extends Config implements EventListener {
    static INSTANCE: MarketplaceManager;
    // private logger: Logger;
    readonly marketplaceRoot: File;
    readonly subscribedItems: SubscribedItem[];
    children(): EventListener[];
    getItem(itemId: number): SubscribedItem | null;
    getSubscribedItemsOfType(itemType: MarketplaceItemType): SubscribedItem[];
    isSubscribed(itemId: number): boolean;
    parent(): EventListener | null;
    subscribe(item: MarketplaceItem): void;
    unregister(): void;
    unsubscribe(itemId: number): void;
    update(item: SubscribedItem, task: Task | null, command: Command | null): Result<void>;
    updateAll(task: Task | null, command: Command | null): void;
}