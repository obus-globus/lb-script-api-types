import type { Class } from '../../java/lang/Class.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { ArraysKt__ArraysKt } from '../../kotlin/collections/ArraysKt__ArraysKt.d.ts'
export class ArraysKt___ArraysJvmKt extends ArraysKt__ArraysKt {
    static arrayOfNulls<T extends unknown>(reference: T[], size: number): T[];
    static asList<T extends unknown>(self: T[]): T[];
    static asList(self: boolean[]): boolean[];
    static asList(self: number[]): number[];
    static asList(self: string[]): string[];
    static binarySearch<T extends unknown>(self: T[], element: T, fromIndex: number, toIndex: number): number;
    static binarySearch<T extends unknown>(self: T[], element: T, comparator: (param0: T, param1: T) => number, fromIndex: number, toIndex: number): number;
    static binarySearch(self: number[], element: number, fromIndex: number, toIndex: number): number;
    static binarySearch(self: string[], element: string, fromIndex: number, toIndex: number): number;
    static contentDeepEquals<T extends unknown>(self: T[] | null, other: T[] | null): boolean;
    static contentDeepHashCode<T extends unknown>(self: T[] | null): number;
    static contentDeepToString<T extends unknown>(self: T[] | null): string;
    static copyInto<T extends unknown>(self: T[], destination: T[], destinationOffset: number, startIndex: number, endIndex: number): T[];
    static copyInto(self: boolean[], destination: boolean[], destinationOffset: number, startIndex: number, endIndex: number): boolean[];
    static copyInto(self: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number[];
    static copyInto(self: string[], destination: string[], destinationOffset: number, startIndex: number, endIndex: number): string[];
    static copyOfRange<T extends unknown>(self: T[], fromIndex: number, toIndex: number): T[];
    static copyOfRange(self: boolean[], fromIndex: number, toIndex: number): boolean[];
    static copyOfRange(self: number[], fromIndex: number, toIndex: number): number[];
    static copyOfRange(self: string[], fromIndex: number, toIndex: number): string[];
    static copyOfRangeToIndexCheck(toIndex: number, size: number): void;
    static fill<T extends unknown>(self: T[], element: T, fromIndex: number, toIndex: number): void;
    static fill(self: boolean[], element: boolean, fromIndex: number, toIndex: number): void;
    static fill(self: number[], element: number, fromIndex: number, toIndex: number): void;
    static fill(self: string[], element: string, fromIndex: number, toIndex: number): void;
    static filterIsInstance<R extends unknown>(self: (Object | null)[], klass: Class<R>): R[];
    static filterIsInstanceTo<C extends R[], R extends unknown>(self: (Object | null)[], destination: C, klass: Class<R>): C;
    static flatten<T extends unknown>(self: T[][]): T[];
    static max(self: number[]): number | null;
    static max(self: string[]): string | null;
    static max<T extends Comparable<T>>(self: T[]): T | null;
    static maxBy<R extends Comparable<R>>(self: boolean[], selector: (param0: boolean) => R): boolean | null;
    static maxBy<R extends Comparable<R>>(self: number[], selector: (param0: number) => R): number | null;
    static maxBy<R extends Comparable<R>>(self: string[], selector: (param0: string) => R): string | null;
    static maxBy<T extends unknown, R extends Comparable<R>>(self: T[], selector: (param0: T) => R): T | null;
    static maxWith(self: boolean[], comparator: (param0: boolean, param1: boolean) => number): boolean | null;
    static maxWith(self: number[], comparator: (param0: number, param1: number) => number): number | null;
    static maxWith(self: string[], comparator: (param0: string, param1: string) => number): string | null;
    static maxWith<T extends unknown>(self: T[], comparator: (param0: T, param1: T) => number): T | null;
    static min(self: number[]): number | null;
    static min(self: string[]): string | null;
    static min<T extends Comparable<T>>(self: T[]): T | null;
    static minBy<R extends Comparable<R>>(self: boolean[], selector: (param0: boolean) => R): boolean | null;
    static minBy<R extends Comparable<R>>(self: number[], selector: (param0: number) => R): number | null;
    static minBy<R extends Comparable<R>>(self: string[], selector: (param0: string) => R): string | null;
    static minBy<T extends unknown, R extends Comparable<R>>(self: T[], selector: (param0: T) => R): T | null;
    static minWith(self: boolean[], comparator: (param0: boolean, param1: boolean) => number): boolean | null;
    static minWith(self: number[], comparator: (param0: number, param1: number) => number): number | null;
    static minWith(self: string[], comparator: (param0: string, param1: string) => number): string | null;
    static minWith<T extends unknown>(self: T[], comparator: (param0: T, param1: T) => number): T | null;
    static orEmpty<T extends unknown>(self: T[] | null): T[];
    static plus<T extends unknown>(self: T[], element: T): T[];
    static plus<T extends unknown>(self: T[], elements: T[]): T[];
    static plus(self: boolean[], element: boolean): boolean[];
    static plus(self: boolean[], elements: boolean[]): boolean[];
    static plus(self: number[], element: number): number[];
    static plus(self: number[], elements: number[]): number[];
    static plus(self: string[], element: string): string[];
    static plus(self: string[], elements: string[]): string[];
    static sort<T extends Comparable<T>>(self: T[], fromIndex: number, toIndex: number): void;
    static sort<T extends unknown>(self: T[]): void;
    static sort<T extends unknown>(self: T[], fromIndex: number, toIndex: number): void;
    static sort(self: number[]): void;
    static sort(self: number[], fromIndex: number, toIndex: number): void;
    static sort(self: string[]): void;
    static sort(self: string[], fromIndex: number, toIndex: number): void;
    static sortWith<T extends unknown>(self: T[], comparator: (param0: T, param1: T) => number): void;
    static sortWith<T extends unknown>(self: T[], comparator: (param0: T, param1: T) => number, fromIndex: number, toIndex: number): void;
    static toSortedSet<T extends Comparable<T>>(self: T[]): T[];
    static toSortedSet<T extends unknown>(self: T[], comparator: (param0: T, param1: T) => number): T[];
    static toSortedSet(self: boolean[]): boolean[];
    static toSortedSet(self: number[]): number[];
    static toSortedSet(self: string[]): string[];
    static toTypedArray<T extends unknown>(self: T[]): T[];
    static toTypedArray(self: boolean[]): boolean[];
    static toTypedArray(self: number[]): number[];
    static toTypedArray(self: string[]): string[];
    static unzip<T extends unknown, R extends unknown>(self: Pair<T, R>[]): Pair<T[], R[]>;
}