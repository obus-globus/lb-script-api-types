import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
import type { Monitor$Guard } from '../../../../../com/google/common/util/concurrent/Monitor$Guard.d.ts'
export class AbstractService$IsStoppableGuard extends Monitor$Guard {
    constructor(null_: AbstractService)
    isSatisfied(): boolean;
}