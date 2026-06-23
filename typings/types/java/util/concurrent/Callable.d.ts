import type { Object } from '../../../java/lang/Object.d.ts'
export interface Callable<V extends unknown> extends Object{
    call(): V;
}