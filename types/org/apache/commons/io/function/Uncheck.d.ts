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
    static accept(paramarg0: (param0: Object | null, param1: Object | null, param2: Object | null) => void, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Object | null): void;
    static accept(paramarg0: (param0: Object | null, param1: Object | null) => void, paramarg1: Object | null, paramarg2: Object | null): void;
    static accept(paramarg0: (param0: Object | null) => void, paramarg1: Object | null): void;
    static accept(paramarg0: (param0: number) => void, paramarg1: number): void;
    static apply(paramarg0: (param0: Object | null) => Object | null, paramarg1: Object | null): Object | null;
    static apply(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static apply(paramarg0: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Object | null): Object | null;
    static apply(paramarg0: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Object | null, paramarg4: Object | null): Object | null;
    static compare(paramarg0: (param0: Object | null, param1: Object | null) => kotlin.Int, paramarg1: Object | null, paramarg2: Object | null): number;
    static get(paramarg0: () => Object | null): Object | null;
    static get(paramarg0: () => Object | null, paramarg1: () => string): Object | null;
    static getAsBoolean(paramarg0: () => kotlin.Boolean): boolean;
    static getAsInt(paramarg0: () => kotlin.Int): number;
    static getAsInt(paramarg0: () => kotlin.Int, paramarg1: () => string): number;
    static getAsLong(paramarg0: () => kotlin.Long): number;
    static getAsLong(paramarg0: () => kotlin.Long, paramarg1: () => string): number;
    static run(paramarg0: () => void): void;
    static run(paramarg0: () => void, paramarg1: () => string): void;
    static test(paramarg0: (param0: Object | null) => kotlin.Boolean, paramarg1: Object | null): boolean;
    private constructor()
}