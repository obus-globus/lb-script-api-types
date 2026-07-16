import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleRecord.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
export abstract class CreateImportMetaNode extends JavaScriptBaseNode {
    static create(): CreateImportMetaNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(module: JSModuleRecord): JSObject;
}