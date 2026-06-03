import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CopyDataPropertiesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CopyDataPropertiesNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLiteralNode$ObjectLiteralSpreadMemberNode extends ObjectLiteralNode$ObjectLiteralMemberNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: (Object | null)[]): (Object | null)[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isStatic: boolean, attributes: number, valueNode: JavaScriptNode)
    // private copyDataPropertiesNode: CopyDataPropertiesNode;
    // private toObjectNode: JSToObjectNode;
    // private valueNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode;
    executeVoid(frame: VirtualFrame, obj: JSObject, realm: JSRealm): void;
    executeVoid(frame: VirtualFrame, receiver: JSObject, target: JSObject, realm: JSRealm): void;
}