import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Copyable<Self extends unknown> extends Object{
    copy(): Self;
}