import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StackedContents$Output<T extends unknown> extends Object{
    accept(item: T): void;
}