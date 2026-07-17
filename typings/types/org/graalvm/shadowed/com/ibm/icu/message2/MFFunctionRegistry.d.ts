import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FunctionFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FunctionFactory.d.ts'
import type { MFFunctionRegistry$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry$Builder.d.ts'
export class MFFunctionRegistry extends Object {
    static builder(): MFFunctionRegistry$Builder;
    private constructor(builder: MFFunctionRegistry$Builder)
    // private classToFunction: Map<Class<Object>, string>;
    // private functionMap: { [key: string]: FunctionFactory };
    getDefaultFunctionNameForType(clazz: Class<Object>): string;
    getDefaultFunctionTypes(): Class<Object>[];
    getFunction(functionName: string): FunctionFactory;
    getFunctionNames(): string[];
}