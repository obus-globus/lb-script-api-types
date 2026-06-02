import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Null extends Object {
    static NAME: TruffleString;
    static NULL_CLASS: JSClass;
    static TYPE_NAME: TruffleString;
    static instance: JSDynamicObject;
    private constructor()
}