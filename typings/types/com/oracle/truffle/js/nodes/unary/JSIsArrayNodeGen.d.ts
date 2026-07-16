import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSIsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsArrayNode.d.ts'
import type { JSIsArrayNodeGen$IsArrayClassData } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsArrayNodeGen$IsArrayClassData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSIsArrayNodeGen extends JSIsArrayNode {
    static create(paramjsType: boolean): JSIsArrayNode;
    static createIsArray(): JSIsArrayNode;
    static createIsArrayLike(): JSIsArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(jsType: boolean)
    // private isArrayClass_cache: JSIsArrayNodeGen$IsArrayClassData;
    // private primitiveOrForeign_interop_: InteropLibrary;
    // private state_0_: number;
    execute(arg0Value: Object): boolean;
    // private executeAndSpecialize(arg0Value: Object): boolean;
}