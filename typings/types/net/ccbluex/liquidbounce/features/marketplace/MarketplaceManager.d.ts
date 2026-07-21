import type { File } from '../../../../../java/io/File.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { MarketplaceItem } from '../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItem.d.ts'
import type { MarketplaceItemType } from '../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemType.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { SubscribedItem } from '../../../../../net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.d.ts'
import type { Task } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * Marketplace manager for subscribing and updating items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/MarketplaceManager.kt:40}
 */
export class MarketplaceManager extends Config implements EventListener {
    static INSTANCE: MarketplaceManager;
    readonly debugDisplayName: Component;
    // private logger: Logger;
    readonly marketplaceRoot: File;
    readonly running: boolean;
    readonly subscribedItems: SubscribedItem[];
    children(): EventListener[];
    getItem(itemId: number): SubscribedItem | null;
    getSubscribedItemsOfType(itemType: MarketplaceItemType): SubscribedItem[];
    isSubscribed(itemId: number): boolean;
    parent(): EventListener | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    subscribe(item: MarketplaceItem, $completion: Continuation<void>): any;
    unregister(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    unsubscribe(itemId: number, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    update(item: SubscribedItem, task: Task | null, command: Command | null, $completion: Continuation<Result<void>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    updateAll(task: Task | null, command: Command | null, $completion: Continuation<void>): any;
}