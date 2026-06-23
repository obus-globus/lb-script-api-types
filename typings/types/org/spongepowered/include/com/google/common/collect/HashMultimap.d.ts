import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractSetMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractSetMultimap.d.ts'
export class HashMultimap<K extends unknown, V extends unknown> extends AbstractSetMultimap<K, V> {
    static create(): HashMultimap<Object, Object>;
    private constructor()
    // private expectedValuesPerKey: number;
    createCollection(): V[];
    createCollection(arg0: K): V[];
}