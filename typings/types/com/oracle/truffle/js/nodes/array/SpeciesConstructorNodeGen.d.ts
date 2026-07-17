import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { SpeciesConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/array/SpeciesConstructorNode.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SpeciesConstructorNodeGen extends SpeciesConstructorNode {
    static create(): SpeciesConstructorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getConstructorNode_: PropertyGetNode;
    // private getSpeciesNode_: PropertyGetNode;
    // private isConstructorNode_: IsConstructorNode;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: JSFunctionObject): Object;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: JSFunctionObject): Object;
}