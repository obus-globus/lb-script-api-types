import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringPair } from '../../../../../net/irisshaders/iris/helpers/StringPair.d.ts'
import type { ShaderPackOptions } from '../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
export class PropertiesPreprocessor extends Object {
    static BACKSLASH_MATCHER: Pattern;
    static preprocessSource(paramarg0: string, paramarg1: StringPair[]): string;
    static preprocessSource(paramarg0: string, paramarg1: ShaderPackOptions, paramarg2: StringPair[]): string;
    constructor()
}