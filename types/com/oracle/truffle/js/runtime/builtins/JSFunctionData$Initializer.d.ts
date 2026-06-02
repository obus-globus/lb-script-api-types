import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSFunctionData$Initializer extends Object{
    initializeRoot(functionData: JSFunctionData): void;
}