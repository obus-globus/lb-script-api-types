import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AbstractService$StateSnapshot extends Object {
    constructor(internalState: Service$State)
    constructor(internalState: Service$State, shutdownWhenStartupFinishes: boolean, failure: Throwable)
    // private failure: Throwable;
    // private shutdownWhenStartupFinishes: boolean;
    // private state: Service$State;
    externalState(): Service$State;
    failureCause(): Throwable;
}