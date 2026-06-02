import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BiConsumer<T extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    accept(arg0: T, arg1: U): void;
}