import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { ArraysKt__ArraysJVMKt } from '../../kotlin/collections/ArraysKt__ArraysJVMKt.d.ts'
export class ArraysKt__ArraysKt extends ArraysKt__ArraysJVMKt {
    static arrayOfNulls<T extends unknown>(reference: T[], size: number): T[];
    static contentDeepEquals<T extends unknown>(self: T[] | null, other: T[] | null): boolean;
    static contentDeepHashCode<T extends unknown>(self: T[] | null): number;
    static contentDeepToString<T extends unknown>(self: T[] | null): string;
    static copyOfRangeToIndexCheck(toIndex: number, size: number): void;
    static flatten<T extends unknown>(self: T[][]): T[];
    static orEmpty<T extends unknown>(self: T[] | null): T[];
    static toTypedArray<T extends unknown>(self: T[]): T[];
    static unzip<T extends unknown, R extends unknown>(self: Pair<T, R>[]): Pair<T[], R[]>;
}