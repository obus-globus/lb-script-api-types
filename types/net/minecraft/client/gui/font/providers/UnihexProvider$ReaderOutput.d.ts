import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UnihexProvider$LineData } from '../../../../../../net/minecraft/client/gui/font/providers/UnihexProvider$LineData.d.ts'
export interface UnihexProvider$ReaderOutput extends Object{
    accept(codepoint: number, glyph: UnihexProvider$LineData): void;
}