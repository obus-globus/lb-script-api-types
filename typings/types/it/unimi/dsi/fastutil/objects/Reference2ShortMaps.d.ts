import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap(): { [key: string]: any };
    static fastForEach(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: { [key: string]: any }): Reference2ShortMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectIterator<Reference2ShortMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}