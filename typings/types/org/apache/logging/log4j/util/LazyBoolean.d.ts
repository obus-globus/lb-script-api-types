import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LazyBoolean extends Object implements BooleanSupplier {
    constructor(supplier: () => boolean)
    // private initialized: boolean;
    // private lock: Lock;
    // private supplier: () => boolean;
    // private value: boolean;
    getAsBoolean(): boolean;
    reset(): void;
    setAsBoolean(b: boolean): void;
}