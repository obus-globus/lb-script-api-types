import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SkullSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/SkullSpecialRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SkullBlock$Type } from '../../../../../net/minecraft/world/level/block/SkullBlock$Type.d.ts'
export class SkullSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<SkullSpecialRenderer$Unbaked>;
    // private animation: number;
    // private kind: SkullBlock$Type;
    // private textureOverride: Optional<Identifier>;
    animation(): number;
    bake(context: SpecialModelRenderer$BakingContext): SkullSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    kind(): SkullBlock$Type;
    textureOverride(): Optional<Identifier>;
    toString(): string;
    type(): MapCodec<SkullSpecialRenderer$Unbaked>;
}