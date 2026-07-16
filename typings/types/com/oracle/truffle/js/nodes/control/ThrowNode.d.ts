import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ErrorStackTraceLimitNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ErrorStackTraceLimitNode.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSErrorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSErrorObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ThrowNode extends StatementNode {
    static EMPTY: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramexceptionNode: JavaScriptNode, paramcontext: JSContext): ThrowNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(exceptionNode: JavaScriptNode, context: JSContext)
    // private context: JSContext;
    // private exceptionNode: JavaScriptNode;
    // private interopNode: InteropLibrary;
    // private isError: ConditionProfile;
    // private stackTraceLimitNode: ErrorStackTraceLimitNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    // private setLineAndColumnNumber(jsobject: JSErrorObject): void;
    // private stackTraceLimitNode(): ErrorStackTraceLimitNode;
    // private tryRethrowInterop(exceptionObject: Object): void;
}