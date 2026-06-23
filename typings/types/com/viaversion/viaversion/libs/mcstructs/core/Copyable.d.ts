import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Copyable<T extends unknown> extends Object{
    copy(): T;
}