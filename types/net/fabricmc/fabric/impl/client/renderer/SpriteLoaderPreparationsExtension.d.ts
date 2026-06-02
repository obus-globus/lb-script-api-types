import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteFinder } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
export interface SpriteLoaderPreparationsExtension extends Object{
    fabric_spriteFinderNullable(): SpriteFinder;
}