import type { HashedItem } from '../../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { HashedStructuredItem } from '../../../../../com/viaversion/viaversion/api/minecraft/item/HashedStructuredItem.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OriginalHashedItem extends HashedStructuredItem {
    static empty(): HashedStructuredItem;
    constructor(arg0: HashedItem, arg1: string)
    private constructor(arg0: number, arg1: number, arg2: { [key: string]: any }, arg3: (Object | null)[], arg4: string)
    constructor(arg0: number, arg1: number, arg2: string)
    // private backupTagName: string;
    asRegularItem(): HashedItem;
    backupTagName(): string;
    copy(): OriginalHashedItem;
}