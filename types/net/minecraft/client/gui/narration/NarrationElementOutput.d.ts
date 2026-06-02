import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NarratedElementType } from '../../../../../net/minecraft/client/gui/narration/NarratedElementType.d.ts'
import type { NarrationThunk } from '../../../../../net/minecraft/client/gui/narration/NarrationThunk.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface NarrationElementOutput extends Object{
    add(type: NarratedElementType, contents: Component[]): void;
    add(type: NarratedElementType, contents: string): void;
    add(type: NarratedElementType, contents: NarrationThunk<Object>): void;
    add(type: NarratedElementType, contents: Component): void;
    nest(): NarrationElementOutput;
}