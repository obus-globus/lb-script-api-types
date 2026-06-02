import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractBodyNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractBodyNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode$Inlined } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode$Inlined.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSBuiltinNode extends AbstractBodyNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    constructor(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean)
    readonly builtin: JSBuiltin;
    // private construct: boolean;
    readonly context: JSContext;
    // private newTarget: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    countsTowardsStackTraceLimit(): boolean;
    getArguments(): JavaScriptNode[];
    getBuiltin(): JSBuiltin;
    getContext(): JSContext;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    isCallerSensitive(): boolean;
    isInlineable(): boolean;
    isSplitImmediately(): boolean;
    tryCreateInlined(): JSBuiltinNode$Inlined;
}