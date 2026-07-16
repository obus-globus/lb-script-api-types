import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap<V extends unknown>(): { [key: string]: any };
    static fastForEach<V extends unknown>(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable<V extends unknown>(paramarg0: { [key: string]: any }): Short2ObjectMap$Entry<V>[];
    static fastIterator<V extends unknown>(paramarg0: { [key: string]: any }): ObjectIterator<Short2ObjectMap$Entry<V>>;
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V): { [key: string]: any };
    static synchronize<V extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize<V extends unknown>(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable<V extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}