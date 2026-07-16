import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CopyDataPropertiesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CopyDataPropertiesNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class RestObjectWithExcludedNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, targetNode: JavaScriptNode, sourceNode: JavaScriptNode, excludedNode: JavaScriptNode)
    // private context: JSContext;
    // private copyDataPropertiesNode: CopyDataPropertiesNode;
    // private excludedNode: JavaScriptNode;
    // private sourceNode: JavaScriptNode;
    // private targetNode: JavaScriptNode;
    copyDataProperties(restObj: JSDynamicObject, source: JSObject, excludedItems: Object[]): JSDynamicObject;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doOther(restObj: JSDynamicObject, source: Object, excludedItems: Object[], toObjectNode: JSToObjectNode): Object;
}