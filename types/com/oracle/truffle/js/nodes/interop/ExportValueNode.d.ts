import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ExportValueNode extends JavaScriptBaseNode {
    static create(): ExportValueNode;
    static getUncached(): ExportValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(value: Object): Object;
    execute(value: Object, thiz: Object, bindMemberFunctions: boolean): Object;
    isInteropCompletePromises(): boolean;
}