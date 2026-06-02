import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContents$AnimatedTexture } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimatedTexture.d.ts'
export interface SpriteContentsTickerAccessor extends Object{
    getAnimationInfo(): SpriteContents$AnimatedTexture;
    getFrame(): number;
    getSubFrame(): number;
    setFrame(arg0: number): void;
    setSubFrame(arg0: number): void;
}