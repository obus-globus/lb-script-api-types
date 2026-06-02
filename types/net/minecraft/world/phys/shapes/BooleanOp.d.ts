import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanOp extends Object{
    apply(first: boolean, second: boolean): boolean;
}