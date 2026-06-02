import type { AsyncHandlerRootNode$AsyncStackTraceInfo } from '../../../../../../com/oracle/truffle/js/nodes/promise/AsyncHandlerRootNode$AsyncStackTraceInfo.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AsyncHandlerRootNode extends Object{
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject, argument: Object): AsyncHandlerRootNode$AsyncStackTraceInfo;
}