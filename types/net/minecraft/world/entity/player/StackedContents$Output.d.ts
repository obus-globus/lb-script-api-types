import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StackedContents$Output<T extends Object | number | string | boolean> extends Object{
    accept(item: T): void;
}