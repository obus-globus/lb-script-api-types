import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$ContainsKeyNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$ContainsKeyNode.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBinaryNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PrivateFieldInNode extends JSBinaryNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): PrivateFieldInNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(left: JavaScriptNode, right: JavaScriptNode)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doFallback(needle: Object, haystack: Object, isObjectNode: IsObjectNode): boolean;
    doInstance(needle: HiddenKey, haystack: JSObject, containsKey: DynamicObject$ContainsKeyNode): boolean;
    doStatic(needle: JSDynamicObject, haystack: JSObject): boolean;
}