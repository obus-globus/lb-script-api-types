import type { Object } from '../../../java/lang/Object.d.ts'
export class ListBuilderKt extends Object {
    static arrayOfUninitializedElements<E extends unknown>(size: number): E[];
    static copyOfUninitializedElements<T extends unknown>(self: T[], newSize: number): T[];
    static resetAt<E extends unknown>(self: E[], index: number): void;
    static resetRange<E extends unknown>(self: E[], fromIndex: number, toIndex: number): void;
}