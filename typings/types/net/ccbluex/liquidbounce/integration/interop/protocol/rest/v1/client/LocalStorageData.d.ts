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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/client/LocalStorageFunctions.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/client/LocalStorageFunctions.kt:27}
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