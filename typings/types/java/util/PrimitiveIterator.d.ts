import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface PrimitiveIterator<T extends Object | number | string | boolean, T_CONS extends Object | number | string | boolean> extends Object, Iterator<T>{
    forEachRemaining(arg0: T_CONS): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    forEachRemaining(arg0: (param0: T) => void): void;
}