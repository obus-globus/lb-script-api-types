import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSAgent } from '../../../../../com/oracle/truffle/js/runtime/JSAgent.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSAgentWaiterList$WaiterRecord extends Object {
    static create(paramagentSignifier: number, parampromiseCapability: PromiseCapabilityRecord, paramtimeout: number, paramresult: TruffleString, paramwl: (Object | null)[], paramagent: JSAgent): JSAgentWaiterList$WaiterRecord;
    private constructor(agentSignifier: number, promiseCapability: PromiseCapabilityRecord, timeout: number, result: TruffleString, wl: (Object | null)[], agent: JSAgent)
    readonly agent: JSAgent;
    readonly agentSignifier: number;
    // private creationTimestamp: number;
    readonly notified: boolean;
    readonly promiseCapability: PromiseCapabilityRecord;
    readonly result: TruffleString;
    readonly timeout: number;
    // private wl: (Object | null)[];
    enqueueInAgent(): void;
    getAgent(): JSAgent;
    getAgentSignifier(): number;
    getCreationTime(): number;
    getPromiseCapability(): PromiseCapabilityRecord;
    getResult(): TruffleString;
    getTimeout(): number;
    getWaiterListEntry(): (Object | null)[];
    isNotified(): boolean;
    isReadyToResolve(): boolean;
    // private isTimedOut(): boolean;
    setCreationTime(timeMillis: number): void;
    setNotified(): void;
    setResult(result: TruffleString): void;
}