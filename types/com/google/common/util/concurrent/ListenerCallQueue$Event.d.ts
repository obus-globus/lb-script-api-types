import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ListenerCallQueue$Event<L extends Object | number | string | boolean> extends Object{
    call(listener: L): void;
}