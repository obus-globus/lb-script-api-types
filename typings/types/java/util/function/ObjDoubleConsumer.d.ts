import type { Object } from '../../../java/lang/Object.d.ts'
export interface ObjDoubleConsumer<T extends unknown> extends Object{
    accept(arg0: T, arg1: number): void;
}