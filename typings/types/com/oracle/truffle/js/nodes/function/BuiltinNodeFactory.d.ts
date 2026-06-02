import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BuiltinNodeFactory extends Object{
    createNode(context: JSContext, builtin: JSBuiltin): JSBuiltinNode;
    createObject(context: JSContext, builtin: JSBuiltin): Object;
}