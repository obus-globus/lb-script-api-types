import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToIntFunction<T extends unknown> extends Object{
    applyAsInt(arg0: T): number;
}