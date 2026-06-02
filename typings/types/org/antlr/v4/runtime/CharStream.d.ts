import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IntStream } from '../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export interface CharStream extends Object, IntStream{
    getText(arg0: Interval): string;
}