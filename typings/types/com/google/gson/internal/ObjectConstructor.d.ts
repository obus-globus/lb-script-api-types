import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ObjectConstructor<T extends unknown> extends Object{
    construct(): T;
}