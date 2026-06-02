import type { Object } from '../../java/lang/Object.d.ts'
export interface Cloneable extends Object{
    protected clone(): Object;
}