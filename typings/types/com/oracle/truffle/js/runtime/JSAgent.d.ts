import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSAgentWaiterList$WaiterRecord } from '../../../../../com/oracle/truffle/js/runtime/JSAgentWaiterList$WaiterRecord.d.ts'
import type { JobCallback } from '../../../../../com/oracle/truffle/js/runtime/JobCallback.d.ts'
import type { PromiseRejectionTracker } from '../../../../../com/oracle/truffle/js/runtime/PromiseRejectionTracker.d.ts'
import type { JSFinalizationRegistryObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFinalizationRegistryObject.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPromiseObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { AsyncContext } from '../../../../../com/oracle/truffle/js/runtime/objects/AsyncContext.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class JSAgent extends Object {
    static get(paramnode: Node): JSAgent;
    constructor(canBlock: boolean)
    readonly asyncContextMapping: AsyncContext;
    // private childAgents: JSAgent[];
    // private finalizationRegistryQueue: WeakReference<JSFinalizationRegistryObject>[];
    // private interopCallStackDepth: number;
    // private promiseJobsQueue: JSFunctionObject[];
    // private promiseRejectionTracker: PromiseRejectionTracker;
    readonly signifier: number;
    // private waitAsyncJobsQueue: JSAgentWaiterList$WaiterRecord[];
    // private weakRefTargets: Object[];
    addWeakRefTargetToSet(target: Object): boolean;
    asyncContextSwap(snapshot: AsyncContext): AsyncContext;
    canBlock(): boolean;
    // private cleanupFinalizers(): void;
    enqueuePromiseJob(job: JSFunctionObject): void;
    enqueueWaitAsyncPromiseJob(waiter: JSAgentWaiterList$WaiterRecord): void;
    getAsyncContextMapping(): AsyncContext;
    getAsyncWaitersToBeResolved(wl: (Object | null)[]): number;
    getSignifier(): number;
    hasPromiseRejectionTracker(): boolean;
    hostMakeJobCallback(callback: Object): JobCallback;
    interopBoundaryEnter(): void;
    interopBoundaryExit(): boolean;
    notifyPromiseRejectionTracker(promise: JSPromiseObject, operation: number, value: Object): void;
    processAllPromises(processWeakRefs: boolean): void;
    // private processWaitAsyncJobs(): boolean;
    registerChildAgent(agent: JSAgent): void;
    registerFinalizationRegistry(finalizationRegistry: JSFinalizationRegistryObject): void;
    // private setAsyncContextMapping(asyncContextMapping: AsyncContext): void;
    setCanBlock(canBlock: boolean): void;
    setPromiseRejectionTracker(tracker: PromiseRejectionTracker): void;
    terminate(): void;
    wake(): void;
}