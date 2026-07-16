import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSProxyHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyHasPropertyNode.d.ts'
import type { JSBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBinaryNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSProxyObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSProxyObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InNode extends JSBinaryNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, paramleft: JavaScriptNode, paramright: JavaScriptNode): InNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, left: JavaScriptNode, right: JavaScriptNode)
    // private context: JSContext;
    // private hasPropertyNode: JSHasPropertyNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doForeign(needle: Object, haystack: Object, isObjectNode: IsObjectNode, errorBranch: InlinedBranchProfile): boolean;
    doObject(needle: Object, haystack: JSObject): boolean;
    doProxy(needle: Object, haystack: JSProxyObject, proxyHasPropertyNode: JSProxyHasPropertyNode): boolean;
    // private getHasPropertyNode(): JSHasPropertyNode;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}