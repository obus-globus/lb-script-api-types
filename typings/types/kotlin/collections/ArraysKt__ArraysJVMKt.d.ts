import type { Object } from '../../java/lang/Object.d.ts'
export class ArraysKt__ArraysJVMKt extends Object {
    static arrayOfNulls<T extends unknown>(reference: T[], size: number): T[];
    static contentDeepHashCode<T extends unknown>(self: T[] | null): number;
    static copyOfRangeToIndexCheck(toIndex: number, size: number): void;
    static orEmpty<T extends unknown>(self: T[] | null): T[];
    static toTypedArray<T extends unknown>(self: T[]): T[];
}