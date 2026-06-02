import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FluidVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentPatch } from '../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { TypedDataComponent } from '../../../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class FluidVariantImpl extends Object implements FluidVariant {
    static CODEC: Codec<FluidVariant>;
    static PACKET_CODEC: StreamCodec<RegistryFriendlyByteBuf, FluidVariant>;
    static blank(): FluidVariant;
    static of(paramarg0: Fluid): FluidVariant;
    static of(paramarg0: Fluid, paramarg1: DataComponentPatch): FluidVariant;
    static of(paramarg0: Holder<Fluid>, paramarg1: DataComponentPatch): FluidVariant;
    static of(paramarg0: Fluid, paramarg1: DataComponentPatch): FluidVariant;
    constructor(arg0: Fluid, arg1: DataComponentPatch)
    // private componentMap: TypedDataComponent<Object>[];
    readonly components: DataComponentPatch;
    readonly fluid: Fluid;
    // private hashCode: number;
    equals(arg0: Object | null): boolean;
    getComponents(): TypedDataComponent<Object>[];
    getComponentsPatch(): DataComponentPatch;
    getFluid(): Fluid;
    getObject(): Fluid;
    hashCode(): number;
    isBlank(): boolean;
    toString(): string;
    typeHolder(): Holder<Fluid>;
    withComponents(arg0: DataComponentPatch): FluidVariant;
}