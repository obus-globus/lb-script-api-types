import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CollectionsKt extends Object {
    static addIfNotNull<T extends unknown>(paramarg0: T[], paramarg1: T): void;
    static compact<T extends unknown>(paramarg0: T[]): T[];
    static mapToIndex<K extends unknown>(paramarg0: K[]): JavaMap<K, number>;
    static newHashMapWithExpectedSize<K extends unknown, V extends unknown>(paramarg0: number): JavaMap<K, V>;
    static newHashSetWithExpectedSize<E extends unknown>(paramarg0: number): E[];
    static newLinkedHashSetWithExpectedSize<E extends unknown>(paramarg0: number): E[];
}