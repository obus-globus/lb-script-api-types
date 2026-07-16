import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicArray } from '../../kotlinx/atomicfu/AtomicArray.d.ts'
import type { AtomicBoolean } from '../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { AtomicLong } from '../../kotlinx/atomicfu/AtomicLong.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
export class AtomicFU_commonKt extends Object {
    static atomicArrayOfNulls<T extends unknown>(size: number): AtomicArray<T>;
    static getAndUpdate<T extends unknown>(self: AtomicRef<T>, function_: (param0: T) => T): T;
    static getAndUpdate(self: AtomicBoolean, function_: (param0: boolean) => boolean): boolean;
    static getAndUpdate(self: AtomicInt, function_: (param0: number) => number): number;
    static getAndUpdate(self: AtomicLong, function_: (param0: number) => number): number;
    static loop<T extends unknown>(self: AtomicRef<T>, action: (param0: T) => void): void;
    static loop(self: AtomicBoolean, action: (param0: boolean) => void): void;
    static loop(self: AtomicInt, action: (param0: number) => void): void;
    static loop(self: AtomicLong, action: (param0: number) => void): void;
    static update<T extends unknown>(self: AtomicRef<T>, function_: (param0: T) => T): void;
    static update(self: AtomicBoolean, function_: (param0: boolean) => boolean): void;
    static update(self: AtomicInt, function_: (param0: number) => number): void;
    static update(self: AtomicLong, function_: (param0: number) => number): void;
    static updateAndGet<T extends unknown>(self: AtomicRef<T>, function_: (param0: T) => T): T;
    static updateAndGet(self: AtomicBoolean, function_: (param0: boolean) => boolean): boolean;
    static updateAndGet(self: AtomicInt, function_: (param0: number) => number): number;
    static updateAndGet(self: AtomicLong, function_: (param0: number) => number): number;
}