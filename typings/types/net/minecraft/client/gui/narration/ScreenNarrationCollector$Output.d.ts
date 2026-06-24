import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NarratedElementType } from '../../../../../net/minecraft/client/gui/narration/NarratedElementType.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { NarrationThunk } from '../../../../../net/minecraft/client/gui/narration/NarrationThunk.d.ts'
import type { ScreenNarrationCollector } from '../../../../../net/minecraft/client/gui/narration/ScreenNarrationCollector.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ScreenNarrationCollector$Output extends Object implements NarrationElementOutput {
    private constructor(null_: ScreenNarrationCollector, depth: number)
    // private depth: number;
    add(type: NarratedElementType, contents: Component[]): void;
    add(type: NarratedElementType, contents: string): void;
    add(type: NarratedElementType, contents: Component): void;
    add(type: NarratedElementType, contents: NarrationThunk<Object>): void;
    nest(): NarrationElementOutput;
}