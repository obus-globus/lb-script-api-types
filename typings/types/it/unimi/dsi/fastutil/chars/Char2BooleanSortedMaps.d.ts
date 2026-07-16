import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: { [key: string]: any }): Char2BooleanMap$Entry[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Char2BooleanMap$Entry>;
    static singleton(paramarg0: string, paramarg1: boolean): { [key: string]: any };
    static singleton(paramarg0: string, paramarg1: boolean, paramarg2: (param0: string, param1: string) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}