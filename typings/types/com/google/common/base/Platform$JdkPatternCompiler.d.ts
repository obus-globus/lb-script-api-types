import type { CommonPattern } from '../../../../com/google/common/base/CommonPattern.d.ts'
import type { PatternCompiler } from '../../../../com/google/common/base/PatternCompiler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Platform$JdkPatternCompiler extends Object implements PatternCompiler {
    private constructor()
    compile(pattern: string): CommonPattern;
    isPcreLike(): boolean;
}