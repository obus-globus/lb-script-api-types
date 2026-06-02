import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectSpliterator<K extends Object | number | string | boolean> extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor()
    skip(arg0: number): number;
}