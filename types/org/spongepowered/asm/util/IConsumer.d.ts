import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IConsumer<TItem extends Object | number | string | boolean> extends Object{
    accept(arg0: TItem): void;
}