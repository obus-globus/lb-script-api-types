import type { Platform$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CommonPattern } from '../../../../com/google/common/base/CommonPattern.d.ts'
import type { PatternCompiler } from '../../../../com/google/common/base/PatternCompiler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Platform$JdkPatternCompiler extends Object implements PatternCompiler {
    private constructor()
    constructor(arg0: Platform$1)
    compile(pattern: string): CommonPattern;
    isPcreLike(): boolean;
}