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
    readonly booleanDefineReferences: { [key: string]: (Object | null)[] };
    readonly booleanOptions: { [key: number]: BooleanOption };
    readonly diagnostics: { [key: number]: string };
    // private lines: string[];
    readonly stringOptions: { [key: number]: StringOption };
    apply(arg0: OptionValues): string;
    asTransform(arg0: OptionValues): LineTransform;
    // private edit(arg0: OptionValues, arg1: number, arg2: string): string;
    // private editConst(arg0: string, arg1: string, arg2: string): string;
    getBooleanDefineReferences(): { [key: string]: (Object | null)[] };
    getBooleanOptions(): { [key: number]: BooleanOption };
    getDiagnostics(): { [key: number]: string };
    getOptionSet(arg0: AbsolutePackPath, arg1: string[]): OptionSet;
    getStringOptions(): { [key: number]: StringOption };
}