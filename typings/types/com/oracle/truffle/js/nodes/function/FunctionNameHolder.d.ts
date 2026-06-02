import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FunctionNameHolder extends Object{
    getFunctionName(): TruffleString;
    isAnonymous(): boolean;
    setFunctionName(name: TruffleString): void;
}