import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { GetPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { IsExtensibleNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsExtensibleNode.d.ts'
import type { KeyInfoNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/KeyInfoNode.d.ts'
import type { KeyInfoNodeGen$CachedOwnPropertyData } from '../../../../../../com/oracle/truffle/js/nodes/interop/KeyInfoNodeGen$CachedOwnPropertyData.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class KeyInfoNodeGen extends KeyInfoNode {
    static INSERTABLE: number;
    static INVOCABLE: number;
    static MODIFIABLE: number;
    static READABLE: number;
    static READ_SIDE_EFFECTS: number;
    static REMOVABLE: number;
    static WRITABLE: number;
    static WRITE_SIDE_EFFECTS: number;
    static create(): KeyInfoNode;
    static getUncached(): KeyInfoNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cachedOwnProperty_cache: KeyInfoNodeGen$CachedOwnPropertyData;
    // private fromJavaStringNode: TruffleString$FromJavaStringNode;
    // private getPrototype: GetPrototypeNode;
    // private isCallable: IsCallableNode;
    // private isExtensible: IsExtensibleNode;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: string, arg2Value: number): boolean;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: string, arg2Value: number): boolean;
}