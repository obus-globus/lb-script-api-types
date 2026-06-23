import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractListMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractListMultimap.d.ts'
export class ArrayListMultimap<K extends unknown, V extends unknown> extends AbstractListMultimap<K, V> {
    static create(): ArrayListMultimap<Object, Object>;
    private constructor()
    // private expectedValuesPerKey: number;
    createCollection(): V[];
    createCollection(arg0: K): V[];
}