import type { Object } from '../../../java/lang/Object.d.ts'
export interface ObjIntConsumer<T extends unknown> extends Object{
    accept(arg0: T, arg1: number): void;
}