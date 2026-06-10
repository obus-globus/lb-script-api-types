import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { BuiltinNodeFactory } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinNodeFactory.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class JSBuiltinsContainer$Lambda extends JSBuiltinsContainer {
    static fromEnum(paramname: TruffleString, parambuiltinEnum: Class<Object>): JSBuiltinsContainer;
    constructor(name: TruffleString)
    defineFunction(name: TruffleString, length: number, nodeFactory: (param0: JSContext, param1: JSBuiltin) => Object): void;
    defineFunction(name: TruffleString, length: number, attributeFlags: number, nodeFactory: (param0: JSContext, param1: JSBuiltin) => Object): void;
}