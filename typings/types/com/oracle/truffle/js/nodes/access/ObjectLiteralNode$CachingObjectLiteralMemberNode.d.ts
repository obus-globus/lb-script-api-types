import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { ObjectLiteralNode$ClassElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ClassElementNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ObjectLiteralNode$CachingObjectLiteralMemberNode extends ObjectLiteralNode$ClassElementNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: Class<Tag>[]): (Object | null)[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(name: Object, isStatic: boolean, attributes: number, isFieldOrStaticBlock: boolean)
    // private dynamicObjectLibrary: DynamicObjectLibrary;
    // private name: Object;
    dynamicObjectLibrary(): DynamicObjectLibrary;
    evaluateKey(frame: VirtualFrame): Object;
}