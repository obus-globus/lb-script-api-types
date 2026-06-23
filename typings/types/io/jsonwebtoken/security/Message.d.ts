import type { Object } from '../../../java/lang/Object.d.ts'
export interface Message<T extends unknown> extends Object{
    getPayload(): T;
}