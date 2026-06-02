import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CopperGolemStatueSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/CopperGolemStatueSpecialRenderer.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CopperGolemStatueBlock$Pose } from '../../../../../net/minecraft/world/level/block/CopperGolemStatueBlock$Pose.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
export class CopperGolemStatueSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<CopperGolemStatueSpecialRenderer$Unbaked>;
    constructor(texture: Identifier, pose: CopperGolemStatueBlock$Pose)
    constructor(state: WeatheringCopper$WeatherState, pose: CopperGolemStatueBlock$Pose)
    // private pose: CopperGolemStatueBlock$Pose;
    // private texture: Identifier;
    bake(context: SpecialModelRenderer$BakingContext): CopperGolemStatueSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pose(): CopperGolemStatueBlock$Pose;
    texture(): Identifier;
    toString(): string;
    type(): MapCodec<CopperGolemStatueSpecialRenderer$Unbaked>;
}