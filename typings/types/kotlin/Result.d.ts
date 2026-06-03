import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Result$Companion } from '../kotlin/Result$Companion.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class Result<T extends Object | number | string | boolean> extends Object implements Serializable {
    static Companion: Result$Companion;
// (invalid TS: name contains '-')     static box-impl(paramarg0: Object): Result<Object>;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: Object): Object;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static exceptionOrNull-impl(paramarg0: Object): Throwable;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: Object): number;
// (invalid TS: name contains '-')     static isFailure-impl(paramarg0: Object): boolean;
// (invalid TS: name contains '-')     static isSuccess-impl(paramarg0: Object): boolean;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: Object): string;
    constructor(value: Object | null)
// (invalid TS: name contains '-')     /*not mapped: */ isFailure-impl(): boolean;
// (invalid TS: name contains '-')     /*not mapped: */ isSuccess-impl(): boolean;
    // private value: Object | null;
    equals(other: Object | null): boolean;
    exceptionOrNull(): Throwable | null;
    getOrNull(): T | null;
    hashCode(): number;
    toString(): string;
}