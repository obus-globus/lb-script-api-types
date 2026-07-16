import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap<K extends unknown>(): { [key: string]: any };
    static fastForEach<K extends unknown>(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable<K extends unknown>(paramarg0: { [key: string]: any }): Object2LongMap$Entry<K>[];
    static fastIterator<K extends unknown>(paramarg0: { [key: string]: any }): ObjectIterator<Object2LongMap$Entry<K>>;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: number): { [key: string]: any };
    static synchronize<K extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize<K extends unknown>(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable<K extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}