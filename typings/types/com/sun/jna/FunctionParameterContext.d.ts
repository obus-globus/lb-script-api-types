import type { Function } from '../../../com/sun/jna/Function.d.ts'
import type { ToNativeContext } from '../../../com/sun/jna/ToNativeContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FunctionParameterContext extends ToNativeContext {
    constructor(arg0: Function, arg1: Object[], arg2: number)
    // private args: Object[];
    readonly function: Function;
    // private index: number;
    getFunction(): Function;
    getParameterIndex(): number;
    getParameters(): Object[];
}