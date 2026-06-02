import type { IntStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/IntStream.d.ts'
import type { Interval } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Interval.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CharStream extends IntStream, Object{
    getText(arg0: Interval): string;
}