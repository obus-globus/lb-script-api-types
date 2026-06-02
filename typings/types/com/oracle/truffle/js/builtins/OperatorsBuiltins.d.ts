import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$Lambda } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$Lambda.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OperatorsBuiltins extends JSBuiltinsContainer$Lambda {
    static BUILTINS: JSBuiltinsContainer;
    static OPERATORS: TruffleString;
    static checkOverloadedOperatorsAllowed(paramarg: JSDynamicObject, paramoriginatingNode: Node): void;
    static fromEnum(paramname: TruffleString, parambuiltinEnum: Class<Object>): JSBuiltinsContainer;
    static overloadedOperatorsAllowed(paramarg: JSDynamicObject): boolean;
    constructor()
}