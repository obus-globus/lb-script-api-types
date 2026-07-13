import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { LocalStorageData$Item } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/client/LocalStorageData$Item.d.ts'
/**
 * LocalStorage RestAPI
 *
 * Allows to persist data across different browser.
 *
 * Since we cannot rely on the browser's localStorage
 * we have to implement our own. This is a simple key-value store.
 *
 * Especially because we have not enabled the CEF local storage
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/client/LocalStorageFunctions.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/client/LocalStorageFunctions.kt:38}
 */
export class LocalStorageData extends Object {
    constructor(items: LocalStorageData$Item[])
    readonly items: LocalStorageData$Item[];
    component1(): LocalStorageData$Item[];
    copy(items: LocalStorageData$Item[]): LocalStorageData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}