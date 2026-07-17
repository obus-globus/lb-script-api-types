import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static fastForEach(paramarg0: JavaMap<any, any>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: JavaMap<any, any>): Double2BooleanMap$Entry[];
    static fastIterator(paramarg0: JavaMap<any, any>): ObjectIterator<Double2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}