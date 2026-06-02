import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface MessagePassingQueue$Consumer<T extends Object | number | string | boolean> extends Object{
    accept(arg0: T): void;
}