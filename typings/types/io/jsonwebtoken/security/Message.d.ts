import type { Object } from '../../../java/lang/Object.d.ts'
export interface Message<T extends Object | number | string | boolean> extends Object{
    getPayload(): T;
}