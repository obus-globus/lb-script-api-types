import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToIntFunction<T extends Object | number | string | boolean> extends Object{
    applyAsInt(arg0: T): number;
}