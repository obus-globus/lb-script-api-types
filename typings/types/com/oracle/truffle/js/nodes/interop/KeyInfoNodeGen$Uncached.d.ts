import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { KeyInfoNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/KeyInfoNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class KeyInfoNodeGen$Uncached extends KeyInfoNode implements UnadoptableNode {
    static INSERTABLE: number;
    static INVOCABLE: number;
    static MODIFIABLE: number;
    static READABLE: number;
    static READ_SIDE_EFFECTS: number;
    static REMOVABLE: number;
    static WRITABLE: number;
    static WRITE_SIDE_EFFECTS: number;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: JSDynamicObject, arg1Value: string, arg2Value: number): boolean;
}