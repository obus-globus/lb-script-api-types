import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap(): { [key: string]: any };
    static fastForEach(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: { [key: string]: any }): Reference2IntMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectIterator<Reference2IntMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}