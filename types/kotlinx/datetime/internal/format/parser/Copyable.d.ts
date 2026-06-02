import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Copyable<Self extends Object | number | string | boolean> extends Object{
    copy(): Self;
}