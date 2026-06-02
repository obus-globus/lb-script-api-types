import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
export interface NarrationSupplier extends Object{
    updateNarration(output: NarrationElementOutput): void;
}