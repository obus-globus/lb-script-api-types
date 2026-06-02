import type { JobCallback } from '../../../../../../com/oracle/truffle/js/runtime/JobCallback.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PromiseReactionRecord extends Object {
    static create(paramcapability: PromiseCapabilityRecord, paramhandler: JobCallback, paramfulfill: boolean): PromiseReactionRecord;
    private constructor(capability: PromiseCapabilityRecord, handler: JobCallback, fulfill: boolean)
    readonly capability: PromiseCapabilityRecord;
    readonly fulfill: boolean;
    readonly handler: JobCallback;
    getCapability(): PromiseCapabilityRecord;
    getHandler(): JobCallback;
    isFulfill(): boolean;
    isReject(): boolean;
}