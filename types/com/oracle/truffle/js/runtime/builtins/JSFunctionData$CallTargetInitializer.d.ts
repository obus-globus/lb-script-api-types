import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionData$Initializer } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$Initializer.d.ts'
import type { JSFunctionData$Target } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$Target.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSFunctionData$CallTargetInitializer extends JSFunctionData$Initializer, Object{
    initializeCallTarget(functionData: JSFunctionData, target: JSFunctionData$Target, rootTarget: CallTarget): void;
    initializeCallTargets(functionData: JSFunctionData): void;
    initializeRoot(functionData: JSFunctionData): void;
}