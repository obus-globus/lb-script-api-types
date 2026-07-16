import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2FloatMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static fastForEach(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: { [key: string]: any }): Byte2FloatMap$Entry[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectIterator<Byte2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}