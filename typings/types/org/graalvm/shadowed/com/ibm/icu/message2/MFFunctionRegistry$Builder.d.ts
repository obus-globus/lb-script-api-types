import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FunctionFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FunctionFactory.d.ts'
import type { MFFunctionRegistry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry.d.ts'
export class MFFunctionRegistry$Builder extends Object {
    private constructor()
    // private classToFunction: JavaMap<Class<Object>, string>;
    // private functionMap: JavaMap<string, FunctionFactory>;
    addAll(functionRegistry: MFFunctionRegistry): MFFunctionRegistry$Builder;
    build(): MFFunctionRegistry;
    clearDefaultFunctionNames(): MFFunctionRegistry$Builder;
    clearFunctions(): MFFunctionRegistry$Builder;
    removeDefaultFunctionNameForType(clazz: Class<Object>): MFFunctionRegistry$Builder;
    removeFunction(functionName: string): MFFunctionRegistry$Builder;
    setDefaultFunctionNameForType(clazz: Class<Object>, functionName: string): MFFunctionRegistry$Builder;
    setFunction(functionName: string, functionFactory: FunctionFactory): MFFunctionRegistry$Builder;
}