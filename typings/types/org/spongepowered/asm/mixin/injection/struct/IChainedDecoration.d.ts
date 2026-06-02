import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IChainedDecoration<T extends Object | number | string | boolean> extends Object{
    replace(arg0: T): void;
}