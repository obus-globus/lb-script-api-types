import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { MarketplaceItem } from '../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItem.d.ts'
import type { MarketplaceItemType } from '../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemType.d.ts'
import type { ResourceTask } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/ResourceTask.d.ts'
export class SubscribedItem extends Object {
    constructor(name: string, id: number, type: MarketplaceItemType, installedRevisionId: number | null)
    constructor(item: MarketplaceItem)
    readonly id: number;
    installedRevisionId: number | null;
    readonly itemDir: File;
    readonly name: string;
    readonly type: MarketplaceItemType;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    checkUpdate($completion: Continuation<number>): any;
    component1(): string;
    component2(): number;
    component3(): MarketplaceItemType;
    component4(): number | null;
    copy(name: string, id: number, type: MarketplaceItemType, installedRevisionId: number | null): SubscribedItem;
    equals(other: Object | null): boolean;
    /**
     * Get the installation folder of the item.
     *
     * Walks down the revision folder until it finds a file,
     * which returns the parent folder of that file,
     * as the installation folder.
     *
     * This ensures instead of e.g., /marketplace/items/265/1713, it returns /marketplace/items/265/1713/dist
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/marketplace/SubscribedItem.kt:55}
     */
    getInstallationFolder(): File | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getNewestRevisionId($completion: Continuation<number>): any;
    hashCode(): number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    install(revisionId: number, subTask: ResourceTask | null, $completion: Continuation<void>): any;
    toString(): string;
}