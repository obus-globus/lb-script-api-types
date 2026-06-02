import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ValueOutput$TypedOutputList<T extends Object | number | string | boolean> extends Object{
    add(value: T): void;
    isEmpty(): boolean;
}