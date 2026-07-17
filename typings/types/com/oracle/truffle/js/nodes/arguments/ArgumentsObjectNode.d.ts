import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArgumentsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArgumentsObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ArgumentsObjectNode extends JavaScriptNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramstrict: boolean, paramleadingArgCount: number): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, strict: boolean, leadingArgCount: number)
    // private context: JSContext;
    // private leadingArgCount: number;
    // private putCalleeNode: DynamicObject$PutNode;
    // private putCallerNode: DynamicObject$PutNode;
    // private putLengthNode: DynamicObject$PutNode;
    // private putSymbolIteratorNode: DynamicObject$PutNode;
    // private strict: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doMapped(frame: VirtualFrame): JSArgumentsObject;
    doUnmapped(frame: VirtualFrame): JSArgumentsObject;
    getObjectArray(frame: VirtualFrame): Object[];
    isStrict(): boolean;
}