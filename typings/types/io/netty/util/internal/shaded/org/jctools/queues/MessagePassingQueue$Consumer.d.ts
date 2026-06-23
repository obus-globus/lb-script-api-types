import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface MessagePassingQueue$Consumer<T extends unknown> extends Object{
    accept(arg0: T): void;
}