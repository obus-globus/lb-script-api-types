import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap<K extends unknown>(): { [key: string]: any };
    static fastForEach<K extends unknown>(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable<K extends unknown>(paramarg0: { [key: string]: any }): Reference2BooleanMap$Entry<K>[];
    static fastIterator<K extends unknown>(paramarg0: { [key: string]: any }): ObjectIterator<Reference2BooleanMap$Entry<K>>;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: boolean): { [key: string]: any };
    static synchronize<K extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize<K extends unknown>(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable<K extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}