import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSAgent } from '../../../../../../com/oracle/truffle/js/runtime/JSAgent.d.ts'
import type { JSArrayBufferObject$Shared } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Shared.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Condition } from '../../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugJSAgent extends JSAgent {
    static get(paramnode: Node): JSAgent;
    constructor(canBlock: boolean)
    // private broadcasts: JSArrayBufferObject$Shared[];
    readonly debugReceiveBroadcast: JSFunctionObject;
    // private queueCondition: Condition;
    // private queueLock: Lock;
    // private quit: boolean;
    // private reportValues: Object[];
    // private thread: Thread;
    broadcast(sab: JSArrayBufferObject$Shared): void;
    // private executeBroadcastCallback(sab: JSArrayBufferObject$Shared): void;
    getReport(): Object;
    leaving(): void;
    // private pushMessage(sab: JSArrayBufferObject$Shared): void;
    report(value: Object): void;
    setDebugReceiveBroadcast(broadcast: JSFunctionObject): void;
    sleep(time: number): void;
    startNewAgent(sourceText: string): void;
    terminate(): void;
    toString(): string;
    wake(): void;
}