import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BiConsumer<T extends unknown, U extends unknown> extends Object{
    accept(arg0: T, arg1: U): void;
}