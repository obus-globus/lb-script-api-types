import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeInstanceElementsNode$InitializeFieldOrAccessorNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(writeNode: Node, callNode: JSFunctionCallNode, isAnonymousFunctionDefinition: boolean)
    // private callInitializersNode: JSFunctionCallNode;
    // private callNode: JSFunctionCallNode;
    // private isAnonymousFunctionDefinition: boolean;
    // private writeNode: Node;
    // private callExtraInitializer(target: Object, initializer: Object, initValue: Object): Object;
    defineField(target: Object, record: ClassElementDefinitionRecord): void;
    // private getInitializersCallNode(): JSFunctionCallNode;
    // private writeValue(target: Object, record: ClassElementDefinitionRecord, value: Object): void;
}