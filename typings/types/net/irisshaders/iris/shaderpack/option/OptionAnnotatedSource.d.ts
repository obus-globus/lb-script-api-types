import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbsolutePackPath } from '../../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
import type { BooleanOption } from '../../../../../net/irisshaders/iris/shaderpack/option/BooleanOption.d.ts'
import type { OptionSet } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { StringOption } from '../../../../../net/irisshaders/iris/shaderpack/option/StringOption.d.ts'
import type { OptionValues } from '../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
import type { LineTransform } from '../../../../../net/irisshaders/iris/shaderpack/transform/line/LineTransform.d.ts'
export class OptionAnnotatedSource extends Object {
    constructor(arg0: string[])
    constructor(arg0: string)
    readonly booleanDefineReferences: JavaMap<string, (Object | null)[]>;
    readonly booleanOptions: JavaMap<number, BooleanOption>;
    readonly diagnostics: JavaMap<number, string>;
    // private lines: string[];
    readonly stringOptions: JavaMap<number, StringOption>;
    apply(arg0: OptionValues): string;
    asTransform(arg0: OptionValues): LineTransform;
    // private edit(arg0: OptionValues, arg1: number, arg2: string): string;
    // private editConst(arg0: string, arg1: string, arg2: string): string;
    getBooleanDefineReferences(): JavaMap<string, (Object | null)[]>;
    getBooleanOptions(): JavaMap<number, BooleanOption>;
    getDiagnostics(): JavaMap<number, string>;
    getOptionSet(arg0: AbsolutePackPath, arg1: string[]): OptionSet;
    getStringOptions(): JavaMap<number, StringOption>;
}