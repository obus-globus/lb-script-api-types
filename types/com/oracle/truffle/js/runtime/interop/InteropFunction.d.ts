import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InteropFunction extends Object implements TruffleObject {
    constructor(function_: JSFunctionObject)
    readonly function: JSFunctionObject;
    getFunction(): JSFunctionObject;
    identityHashCode(): number;
    isIdenticalOrUndefined(other: Object, thisLib: InteropLibrary, otherLib: InteropLibrary): TriState;
}