import type { FunctionFactory } from '../../../../com/ibm/icu/message2/FunctionFactory.d.ts'
import type { MFFunctionRegistry } from '../../../../com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFFunctionRegistry$Builder extends Object {
    private constructor()
    // private classToFunction: Map<Class<Object>, string>;
    // private functionMap: { [key: string]: FunctionFactory };
    addAll(arg0: MFFunctionRegistry): MFFunctionRegistry$Builder;
    build(): MFFunctionRegistry;
    clearDefaultFunctionNames(): MFFunctionRegistry$Builder;
    clearFunctions(): MFFunctionRegistry$Builder;
    removeDefaultFunctionNameForType(arg0: Class<Object>): MFFunctionRegistry$Builder;
    removeFunction(arg0: string): MFFunctionRegistry$Builder;
    setDefaultFunctionNameForType(arg0: Class<Object>, arg1: string): MFFunctionRegistry$Builder;
    setFunction(arg0: string, arg1: FunctionFactory): MFFunctionRegistry$Builder;
}