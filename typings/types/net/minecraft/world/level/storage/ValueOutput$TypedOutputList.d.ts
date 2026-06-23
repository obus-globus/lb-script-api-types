import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ValueOutput$TypedOutputList<T extends unknown> extends Object{
    add(value: T): void;
    isEmpty(): boolean;
}