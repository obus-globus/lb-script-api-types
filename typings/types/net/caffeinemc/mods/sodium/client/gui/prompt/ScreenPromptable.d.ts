import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Dimensioned } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/Dimensioned.d.ts'
import type { ScreenPrompt } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/prompt/ScreenPrompt.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
export interface ScreenPromptable extends Object, Dimensioned{
    getCenterX(): number;
    getCenterY(): number;
    getDimensions(): Dim2i;
    getHeight(): number;
    getLimitX(): number;
    getLimitY(): number;
    getPrompt(): ScreenPrompt;
    getWidth(): number;
    getX(): number;
    getY(): number;
    setPrompt(arg0: ScreenPrompt): void;
}