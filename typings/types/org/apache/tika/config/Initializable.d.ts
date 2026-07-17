import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InitializableProblemHandler } from '../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
export interface Initializable extends Object{
    checkInitialization(arg0: InitializableProblemHandler): void;
    initialize(arg0: JavaMap<string, Param<Object>>): void;
}