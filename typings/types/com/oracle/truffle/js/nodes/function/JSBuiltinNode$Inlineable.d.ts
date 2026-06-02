import type { NodeInterface } from '../../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { JSBuiltinNode$Inlined } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode$Inlined.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSBuiltinNode$Inlineable extends NodeInterface, Object{
    createInlined(): JSBuiltinNode$Inlined;
}