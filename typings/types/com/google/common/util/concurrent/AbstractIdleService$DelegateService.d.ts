import type { AbstractIdleService$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractIdleService } from '../../../../../com/google/common/util/concurrent/AbstractIdleService.d.ts'
import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
export class AbstractIdleService$DelegateService extends AbstractService {
    private constructor(null_: AbstractIdleService)
    constructor(null_: AbstractIdleService, arg1: AbstractIdleService$1)
    doStart(): void;
    doStop(): void;
    toString(): string;
}