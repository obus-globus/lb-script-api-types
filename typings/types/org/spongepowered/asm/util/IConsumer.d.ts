import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IConsumer<TItem extends unknown> extends Object{
    accept(arg0: TItem): void;
}