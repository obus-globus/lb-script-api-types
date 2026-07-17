import type { Supplier } from '../../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractIdleService } from '../../../../../com/google/common/util/concurrent/AbstractIdleService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractIdleService$ThreadNameSupplier extends Object implements Supplier<string> {
    private constructor(null_: AbstractIdleService)
    get(): string;
}