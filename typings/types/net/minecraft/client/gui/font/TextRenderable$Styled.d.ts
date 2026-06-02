import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ActiveArea } from '../../../../../net/minecraft/client/gui/font/ActiveArea.d.ts'
import type { TextRenderable } from '../../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
export interface TextRenderable$Styled extends Object, ActiveArea, TextRenderable{
    activeBottom(): number;
    activeLeft(): number;
    activeRight(): number;
    activeTop(): number;
}