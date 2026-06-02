import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToDoubleFunction<T extends Object | number | string | boolean> extends Object{
    applyAsDouble(arg0: T): number;
}