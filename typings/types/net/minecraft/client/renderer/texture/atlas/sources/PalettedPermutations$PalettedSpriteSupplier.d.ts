import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { IntUnaryOperator } from '../../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteContents } from '../../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteResourceLoader } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteResourceLoader.d.ts'
import type { SpriteSource$DiscardableLoader } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$DiscardableLoader.d.ts'
import type { LazyLoadedImage } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/sources/LazyLoadedImage.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export class PalettedPermutations$PalettedSpriteSupplier extends Record implements SpriteSource$DiscardableLoader {
    private constructor(baseImage: LazyLoadedImage, palette: () => (param0: number) => kotlin.Int, permutationLocation: Identifier)
    // private baseImage: LazyLoadedImage;
    // private palette: () => (param0: number) => kotlin.Int;
    // private permutationLocation: Identifier;
    baseImage(): LazyLoadedImage;
    discard(): void;
    equals(o: Object | null): boolean;
    get(loader: (param0: Identifier, param1: Resource) => net.minecraft.client.renderer.texture.SpriteContents): SpriteContents;
    hashCode(): number;
    palette(): () => (param0: number) => kotlin.Int;
    permutationLocation(): Identifier;
    toString(): string;
}