import type { DynamicObjectLibraryImpl$KeyCacheNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$KeyCacheNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObjectLibraryImpl$KeyCacheEntry extends DynamicObjectLibraryImpl$KeyCacheNode {
    constructor(next: DynamicObjectLibraryImpl$KeyCacheEntry)
    // private next: DynamicObjectLibraryImpl$KeyCacheEntry;
    acceptsKey(key: Object): boolean;
}