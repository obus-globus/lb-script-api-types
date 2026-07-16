import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static fastForEach(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: { [key: string]: any }): Short2CharMap$Entry[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectIterator<Short2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}