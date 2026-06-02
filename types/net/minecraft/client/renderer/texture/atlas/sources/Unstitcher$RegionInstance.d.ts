import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteContents } from '../../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteResourceLoader } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteResourceLoader.d.ts'
import type { SpriteSource$DiscardableLoader } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$DiscardableLoader.d.ts'
import type { LazyLoadedImage } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/sources/LazyLoadedImage.d.ts'
import type { Unstitcher$Region } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/sources/Unstitcher$Region.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export class Unstitcher$RegionInstance extends Object implements SpriteSource$DiscardableLoader {
    private constructor(image: LazyLoadedImage, region: Unstitcher$Region, xDivisor: number, yDivisor: number)
    // private image: LazyLoadedImage;
    // private region: Unstitcher$Region;
    // private xDivisor: number;
    // private yDivisor: number;
    discard(): void;
    discard(): void;
    get(loader: (param0: Identifier, param1: Resource) => net.minecraft.client.renderer.texture.SpriteContents): SpriteContents;
}