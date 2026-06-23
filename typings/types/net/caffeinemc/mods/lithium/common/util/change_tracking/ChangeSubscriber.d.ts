import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ChangeSubscriber<T extends unknown> extends Object{
    lithium$forceUnsubscribe(arg0: T, arg1: number): void;
    lithium$notify(arg0: T, arg1: number): void;
}