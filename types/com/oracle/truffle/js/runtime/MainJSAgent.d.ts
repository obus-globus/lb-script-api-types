import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSAgent } from '../../../../../com/oracle/truffle/js/runtime/JSAgent.d.ts'
export class MainJSAgent extends JSAgent {
    static get(paramnode: Node): JSAgent;
    constructor()
    wake(): void;
}