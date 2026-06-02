import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Result$Companion } from '../kotlin/Result$Companion.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class Result<T extends Object | number | string | boolean> extends Object implements Serializable {
    static Companion: Result$Companion;
//     static box-impl(paramarg0: Object): Result<Object>;
 // ; invalid because of -//     static constructor-impl(paramarg0: Object): Object;
 // ; invalid because of -//     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static exceptionOrNull-impl(paramarg0: Object): Throwable;
 // ; invalid because of -//     static hashCode-impl(paramarg0: Object): number;
 // ; invalid because of -//     static isFailure-impl(paramarg0: Object): boolean;
 // ; invalid because of -//     static isSuccess-impl(paramarg0: Object): boolean;
 // ; invalid because of -//     static toString-impl(paramarg0: Object): string;
 // ; invalid because of -    constructor(value: Object | null)
//     /*not mapped: */ isFailure-impl(): boolean;
 // ; invalid because of -//     /*not mapped: */ isSuccess-impl(): boolean;
 // ; invalid because of -    // private value: Object | null;
    equals(other: Object | null): boolean;
    exceptionOrNull(): Throwable | null;
    getOrNull(): T | null;
    hashCode(): number;
    toString(): string;
}