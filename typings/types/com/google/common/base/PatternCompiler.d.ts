import type { CommonPattern } from '../../../../com/google/common/base/CommonPattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PatternCompiler extends Object{
    compile(pattern: string): CommonPattern;
    isPcreLike(): boolean;
}