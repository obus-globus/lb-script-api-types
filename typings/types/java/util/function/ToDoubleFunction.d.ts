import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToDoubleFunction<T extends unknown> extends Object{
    applyAsDouble(arg0: T): number;
}