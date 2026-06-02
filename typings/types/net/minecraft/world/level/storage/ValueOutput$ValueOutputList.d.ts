import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export interface ValueOutput$ValueOutputList extends Object{
    addChild(): ValueOutput;
    discardLast(): void;
    isEmpty(): boolean;
}