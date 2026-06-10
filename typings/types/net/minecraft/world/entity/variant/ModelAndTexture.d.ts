import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientAsset$ResourceTexture } from '../../../../../net/minecraft/core/ClientAsset$ResourceTexture.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelAndTexture<T extends Object | number | string | boolean> extends Record {
    static codec(parammodelCodec: Codec<Object>, paramdefaultModel: Object | null): MapCodec<ModelAndTexture<Object>>;
    static streamCodec(parammodelCodec: StreamCodec<Object, Object>): StreamCodec<RegistryFriendlyByteBuf, ModelAndTexture<Object>>;
    constructor(model: T, asset: ClientAsset$ResourceTexture)
    constructor(model: T, assetId: Identifier)
    // private asset: ClientAsset$ResourceTexture;
    // private model: T;
    asset(): ClientAsset$ResourceTexture;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): T;
    toString(): string;
}