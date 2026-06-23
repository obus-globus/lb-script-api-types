import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface MessagePassingQueue$Supplier<T extends unknown> extends Object{
    get(): T;
}