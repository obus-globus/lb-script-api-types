import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractSetMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractSetMultimap.d.ts'
export class HashMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractSetMultimap<K, V> {
    static create(): HashMultimap<Object, Object>;
    private constructor()
    // private expectedValuesPerKey: number;
    createCollection(): V[];
}