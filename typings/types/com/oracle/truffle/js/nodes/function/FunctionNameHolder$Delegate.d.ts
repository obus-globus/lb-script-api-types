import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { FunctionNameHolder } from '../../../../../../com/oracle/truffle/js/nodes/function/FunctionNameHolder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FunctionNameHolder$Delegate extends FunctionNameHolder, Object{
    getFunctionName(): TruffleString;
    getFunctionNameHolder(): FunctionNameHolder;
    isAnonymous(): boolean;
    isAnonymous(): boolean;
    setFunctionName(name: TruffleString): void;
}