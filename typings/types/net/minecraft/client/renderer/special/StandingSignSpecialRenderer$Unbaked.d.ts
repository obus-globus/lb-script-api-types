import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { StandingSignSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/StandingSignSpecialRenderer.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PlainSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/PlainSignBlock$Attachment.d.ts'
import type { WoodType } from '../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
export class StandingSignSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<StandingSignSpecialRenderer$Unbaked>;
    constructor(woodType: WoodType, attachment: PlainSignBlock$Attachment)
    constructor(woodType: WoodType, attachment: PlainSignBlock$Attachment, texture: Optional<Identifier>)
    // private attachment: PlainSignBlock$Attachment;
    // private texture: Optional<Identifier>;
    // private woodType: WoodType;
    attachment(): PlainSignBlock$Attachment;
    bake(context: SpecialModelRenderer$BakingContext): StandingSignSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    texture(): Optional<Identifier>;
    toString(): string;
    type(): MapCodec<StandingSignSpecialRenderer$Unbaked>;
    woodType(): WoodType;
}