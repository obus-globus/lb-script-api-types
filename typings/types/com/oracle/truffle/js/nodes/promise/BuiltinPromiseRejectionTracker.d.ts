import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { BuiltinPromiseRejectionTracker$PromiseChainInfoRecord } from '../../../../../../com/oracle/truffle/js/nodes/promise/BuiltinPromiseRejectionTracker$PromiseChainInfoRecord.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSContextOptions$UnhandledRejectionsTrackingMode } from '../../../../../../com/oracle/truffle/js/runtime/JSContextOptions$UnhandledRejectionsTrackingMode.d.ts'
import type { PromiseRejectionTracker } from '../../../../../../com/oracle/truffle/js/runtime/PromiseRejectionTracker.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BuiltinPromiseRejectionTracker extends Object implements PromiseRejectionTracker {
    constructor(context: JSContext, mode: JSContextOptions$UnhandledRejectionsTrackingMode)
    // private asyncHandledRejections: BuiltinPromiseRejectionTracker$PromiseChainInfoRecord[];
    // private context: JSContext;
    // private maybeUnhandledPromises: JavaMap<JSDynamicObject, BuiltinPromiseRejectionTracker$PromiseChainInfoRecord>;
    // private mode: JSContextOptions$UnhandledRejectionsTrackingMode;
    // private pendingUnhandledRejections: JSDynamicObject[];
    promiseReactionJobsProcessed(): void;
    promiseRejected(promise: JSDynamicObject, reason: Object): void;
    promiseRejectedAfterResolved(promise: JSDynamicObject, value: Object): void;
    promiseRejectionHandled(promise: JSDynamicObject): void;
    promiseResolvedAfterResolved(promise: JSDynamicObject, value: Object): void;
}