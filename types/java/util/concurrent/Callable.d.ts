import type { Object } from '../../../java/lang/Object.d.ts'
export interface Callable<V extends Object | number | string | boolean> extends Object{
    call(): V;
}