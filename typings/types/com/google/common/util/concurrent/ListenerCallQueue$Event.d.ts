import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ListenerCallQueue$Event<L extends unknown> extends Object{
    call(listener: L): void;
}