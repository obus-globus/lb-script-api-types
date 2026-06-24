import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChestSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/ChestSpecialRenderer.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ChestType } from '../../../../../net/minecraft/world/level/block/state/properties/ChestType.d.ts'
export class ChestSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<ChestSpecialRenderer$Unbaked>;
    constructor(texture: Identifier)
    constructor(texture: Identifier, openness: number, chestType: ChestType)
    constructor(texture: Identifier, chestType: ChestType)
    // private chestType: ChestType;
    // private openness: number;
    // private texture: Identifier;
    bake(context: SpecialModelRenderer$BakingContext): ChestSpecialRenderer;
    chestType(): ChestType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    openness(): number;
    texture(): Identifier;
    toString(): string;
    type(): MapCodec<ChestSpecialRenderer$Unbaked>;
}