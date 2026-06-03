import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLiteralNode$DictionaryObjectDataMemberNode extends ObjectLiteralNode$ObjectLiteralMemberNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: (Object | null)[]): (Object | null)[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(name: Object, isStatic: boolean, attributes: number, valueNode: JavaScriptNode)
    // private name: Object;
    // private valueNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode;
    executeVoid(frame: VirtualFrame, obj: JSObject, realm: JSRealm): void;
    executeVoid(frame: VirtualFrame, receiver: JSObject, homeObject: JSObject, realm: JSRealm): void;
}