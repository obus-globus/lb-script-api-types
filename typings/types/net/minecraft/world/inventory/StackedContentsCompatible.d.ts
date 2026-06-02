import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StackedItemContents } from '../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
export interface StackedContentsCompatible extends Object{
    fillStackedContents(contents: StackedItemContents): void;
}