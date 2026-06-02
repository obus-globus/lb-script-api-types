import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteSource$Loader } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Loader.d.ts'
export interface SpriteSource$DiscardableLoader extends Object, SpriteSource$Loader{
    discard(): void;
}