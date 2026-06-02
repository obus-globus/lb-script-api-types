import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSAgent } from '../../../../../com/oracle/truffle/js/runtime/JSAgent.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { SerializedData } from '../../../../../com/oracle/truffle/js/runtime/SerializedData.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WorkerAgent extends JSAgent {
    static get(paramnode: Node): JSAgent;
    constructor()
    // private finished: boolean;
    // private inMessages: SerializedData[];
    // private outMessages: SerializedData[];
    // private workerContext: TruffleContext;
    getOutMessage(realm: JSRealm): Object;
    // private markFinished(): void;
    postInMessage(message: Object, transferSet: JSArrayBufferObject[]): void;
    postOutMessage(message: Object): void;
    start(code: string): void;
    terminate(): void;
    toString(): string;
    wake(): void;
}