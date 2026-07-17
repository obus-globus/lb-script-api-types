import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FunctionFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FunctionFactory.d.ts'
import type { MFFunctionRegistry$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry$Builder.d.ts'
export class MFFunctionRegistry extends Object {
    static builder(): MFFunctionRegistry$Builder;
    private constructor(builder: MFFunctionRegistry$Builder)
    // private classToFunction: JavaMap<Class<Object>, string>;
    // private functionMap: JavaMap<string, FunctionFactory>;
    getDefaultFunctionNameForType(clazz: Class<Object>): string;
    getDefaultFunctionTypes(): Class<Object>[];
    getFunction(functionName: string): FunctionFactory;
    getFunctionNames(): string[];
}