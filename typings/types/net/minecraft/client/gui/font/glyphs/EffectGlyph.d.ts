import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderable } from '../../../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
export interface EffectGlyph extends Object{
    createEffect(x0: number, y0: number, x1: number, y1: number, depth: number, color: number, shadowColor: number, shadowOffset: number): TextRenderable;
}