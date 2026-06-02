import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HangingSignSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/HangingSignSpecialRenderer.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { HangingSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/HangingSignBlock$Attachment.d.ts'
import type { WoodType } from '../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
export class HangingSignSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<HangingSignSpecialRenderer$Unbaked>;
    constructor(woodType: WoodType, attachment: HangingSignBlock$Attachment)
    constructor(woodType: WoodType, attachment: HangingSignBlock$Attachment, texture: Optional<Identifier>)
    // private attachment: HangingSignBlock$Attachment;
    // private texture: Optional<Identifier>;
    // private woodType: WoodType;
    attachment(): HangingSignBlock$Attachment;
    bake(context: SpecialModelRenderer$BakingContext): HangingSignSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    texture(): Optional<Identifier>;
    toString(): string;
    type(): MapCodec<HangingSignSpecialRenderer$Unbaked>;
    woodType(): WoodType;
}