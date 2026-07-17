import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FunctionFactory } from '../../../../com/ibm/icu/message2/FunctionFactory.d.ts'
import type { MFFunctionRegistry$Builder } from '../../../../com/ibm/icu/message2/MFFunctionRegistry$Builder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFFunctionRegistry extends Object {
    static builder(): MFFunctionRegistry$Builder;
    private constructor(arg0: MFFunctionRegistry$Builder)
    // private classToFunction: JavaMap<Class<Object>, string>;
    // private functionMap: JavaMap<string, FunctionFactory>;
    getDefaultFunctionNameForType(arg0: Class<Object>): string;
    getDefaultFunctionTypes(): Class<Object>[];
    getFunction(arg0: string): FunctionFactory;
    getFunctionNames(): string[];
}