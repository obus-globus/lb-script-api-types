import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOBiConsumer } from '../../../../../org/apache/commons/io/function/IOBiConsumer.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
import type { IOBooleanSupplier } from '../../../../../org/apache/commons/io/function/IOBooleanSupplier.d.ts'
import type { IOComparator } from '../../../../../org/apache/commons/io/function/IOComparator.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
import type { IOIntConsumer } from '../../../../../org/apache/commons/io/function/IOIntConsumer.d.ts'
import type { IOIntSupplier } from '../../../../../org/apache/commons/io/function/IOIntSupplier.d.ts'
import type { IOLongSupplier } from '../../../../../org/apache/commons/io/function/IOLongSupplier.d.ts'
import type { IOPredicate } from '../../../../../org/apache/commons/io/function/IOPredicate.d.ts'
import type { IOQuadFunction } from '../../../../../org/apache/commons/io/function/IOQuadFunction.d.ts'
import type { IORunnable } from '../../../../../org/apache/commons/io/function/IORunnable.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
import type { IOTriConsumer } from '../../../../../org/apache/commons/io/function/IOTriConsumer.d.ts'
import type { IOTriFunction } from '../../../../../org/apache/commons/io/function/IOTriFunction.d.ts'
export class Uncheck extends Object {
    static accept<T extends unknown, U extends unknown, V extends unknown>(paramarg0: (param0: T, param1: U, param2: V) => void, paramarg1: T, paramarg2: U, paramarg3: V): void;
    static accept<T extends unknown, U extends unknown>(paramarg0: (param0: T, param1: U) => void, paramarg1: T, paramarg2: U): void;
    static accept<T extends unknown>(paramarg0: (param0: T) => void, paramarg1: T): void;
    static accept(paramarg0: (param0: number) => void, paramarg1: number): void;
    static apply<T extends unknown, R extends unknown>(paramarg0: (param0: T) => R, paramarg1: T): R;
    static apply<T extends unknown, U extends unknown, R extends unknown>(paramarg0: (param0: T, param1: U) => R, paramarg1: T, paramarg2: U): R;
    static apply<T extends unknown, U extends unknown, V extends unknown, R extends unknown>(paramarg0: (param0: T, param1: U, param2: V) => R, paramarg1: T, paramarg2: U, paramarg3: V): R;
    static apply<T extends unknown, U extends unknown, V extends unknown, W extends unknown, R extends unknown>(paramarg0: (param0: T, param1: U, param2: V, param3: W) => R, paramarg1: T, paramarg2: U, paramarg3: V, paramarg4: W): R;
    static compare<T extends unknown>(paramarg0: (param0: T, param1: T) => number, paramarg1: T, paramarg2: T): number;
    static get<T extends unknown>(paramarg0: () => T): T;
    static get<T extends unknown>(paramarg0: () => T, paramarg1: () => string): T;
    static getAsBoolean(paramarg0: () => boolean): boolean;
    static getAsInt(paramarg0: () => number): number;
    static getAsInt(paramarg0: () => number, paramarg1: () => string): number;
    static getAsLong(paramarg0: () => number): number;
    static getAsLong(paramarg0: () => number, paramarg1: () => string): number;
    static run(paramarg0: () => void): void;
    static run(paramarg0: () => void, paramarg1: () => string): void;
    static test<T extends unknown>(paramarg0: (param0: T) => boolean, paramarg1: T): boolean;
    private constructor()
}