import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IncludeGraph } from '../../../../../net/irisshaders/iris/shaderpack/include/IncludeGraph.d.ts'
import type { OptionSet } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { OptionValues } from '../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
export class ShaderPackOptions extends Object {
    constructor(arg0: IncludeGraph, arg1: JavaMap<string, string>)
    readonly includes: IncludeGraph;
    readonly optionSet: OptionSet;
    readonly optionValues: OptionValues;
    getIncludes(): IncludeGraph;
    getOptionSet(): OptionSet;
    getOptionValues(): OptionValues;
}