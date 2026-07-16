import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ChannelResult$Companion } from '../../../kotlinx/coroutines/channels/ChannelResult$Companion.d.ts'
export class ChannelResult<T extends unknown> extends Object {
    static Companion: ChannelResult$Companion;
// (invalid TS: name contains '-')     static box-impl(paramarg0: Object): ChannelResult<Object>;
// (invalid TS: name contains '-')     static constructor-impl<T extends unknown>(paramarg0: Object): Object;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static exceptionOrNull-impl(): Throwable | null;
// (invalid TS: name contains '-')     static getOrNull-impl<T extends unknown>(): T | null;
// (invalid TS: name contains '-')     static getOrThrow-impl<T extends unknown>(): T;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: Object): number;
// (invalid TS: name contains '-')     static isClosed-impl(paramarg0: Object): boolean;
// (invalid TS: name contains '-')     static isFailure-impl(paramarg0: Object): boolean;
// (invalid TS: name contains '-')     static isSuccess-impl(paramarg0: Object): boolean;
// (invalid TS: name contains '-')     static toString-impl(): string;
    constructor(holder: Object | null)
    // private holder: Object | null;
// (invalid TS: name contains '-')     /*not mapped: */ isClosed-impl(): boolean;
// (invalid TS: name contains '-')     /*not mapped: */ isFailure-impl(): boolean;
// (invalid TS: name contains '-')     /*not mapped: */ isSuccess-impl(): boolean;
    equals(other: Object | null): boolean;
    exceptionOrNull(): Throwable | null;
    getOrNull(): T | null;
    getOrThrow(): T;
    hashCode(): number;
    toString(): string;
}