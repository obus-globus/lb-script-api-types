import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { CachedParseState$CacheEntry } from '../../../../../net/minecraft/util/parsing/packrat/CachedParseState$CacheEntry.d.ts'
export class CachedParseState$PositionCache extends Object {
    static ENTRY_STRIDE: number;
    private constructor()
    // private atomCache: Object[];
    // private nextKey: number;
    allocateNewEntry(key: Atom<Object>): number;
    findKeyIndex(key: Atom<Object>): number;
    getValue<T extends Object | number | string | boolean>(keyIndex: number): CachedParseState$CacheEntry<T>;
    setValue(keyIndex: number, entry: CachedParseState$CacheEntry<Object>): void;
}