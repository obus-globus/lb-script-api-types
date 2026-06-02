import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ChannelResult$Companion } from '../../../kotlinx/coroutines/channels/ChannelResult$Companion.d.ts'
export class ChannelResult<T extends Object | number | string | boolean> extends Object {
    static Companion: ChannelResult$Companion;
//     static box-impl(paramarg0: Object): ChannelResult<Object>;
 // ; invalid because of -//     static constructor-impl(paramarg0: Object): Object;
 // ; invalid because of -//     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static exceptionOrNull-impl(paramarg0: Object): Throwable;
 // ; invalid because of -//     static getOrNull-impl(paramarg0: Object): Object | null;
 // ; invalid because of -//     static getOrThrow-impl(paramarg0: Object): Object | null;
 // ; invalid because of -//     static hashCode-impl(paramarg0: Object): number;
 // ; invalid because of -//     static isClosed-impl(paramarg0: Object): boolean;
 // ; invalid because of -//     static isFailure-impl(paramarg0: Object): boolean;
 // ; invalid because of -//     static isSuccess-impl(paramarg0: Object): boolean;
 // ; invalid because of -//     static toString-impl(paramarg0: Object): string;
 // ; invalid because of -    constructor(holder: Object | null)
    // private holder: Object | null;
//     /*not mapped: */ isClosed-impl(): boolean;
 // ; invalid because of -//     /*not mapped: */ isFailure-impl(): boolean;
 // ; invalid because of -//     /*not mapped: */ isSuccess-impl(): boolean;
 // ; invalid because of -    equals(other: Object | null): boolean;
    exceptionOrNull(): Throwable | null;
    getOrNull(): T | null;
    getOrThrow(): T;
    hashCode(): number;
    toString(): string;
}