import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PromiseRejectionTracker extends Object{
    promiseReactionJobsProcessed(): void;
    promiseRejected(promise: JSDynamicObject, value: Object): void;
    promiseRejectedAfterResolved(promise: JSDynamicObject, value: Object): void;
    promiseRejectionHandled(promise: JSDynamicObject): void;
    promiseResolvedAfterResolved(promise: JSDynamicObject, value: Object): void;
}