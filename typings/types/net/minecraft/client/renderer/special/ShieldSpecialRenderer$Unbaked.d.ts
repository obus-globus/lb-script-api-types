import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShieldSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/ShieldSpecialRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { TypedDataComponent } from '../../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class ShieldSpecialRenderer$Unbaked extends Record implements SpecialModelRenderer$Unbaked<TypedDataComponent<Object>[]> {
    static INSTANCE: ShieldSpecialRenderer$Unbaked;
    static MAP_CODEC: MapCodec<ShieldSpecialRenderer$Unbaked>;
    constructor()
    bake(context: SpecialModelRenderer$BakingContext): ShieldSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MapCodec<ShieldSpecialRenderer$Unbaked>;
}