import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamCodec$CodecOperation } from '../../../../../../net/minecraft/network/codec/StreamCodec$CodecOperation.d.ts'
import type { Ingredient } from '../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class CustomIngredientStreamCodec extends Object implements StreamCodec<RegistryFriendlyByteBuf, Ingredient> {
    constructor(arg0: StreamCodec<RegistryFriendlyByteBuf, Ingredient>)
    // private fallback: StreamCodec<RegistryFriendlyByteBuf, Ingredient>;
    apply<O extends unknown>(operation: (param0: StreamCodec<RegistryFriendlyByteBuf, Ingredient>) => StreamCodec<RegistryFriendlyByteBuf, O>): StreamCodec<RegistryFriendlyByteBuf, O>;
    cast<S extends B>(): StreamCodec<S, Ingredient>;
    decode(arg0: RegistryFriendlyByteBuf): Ingredient;
    dispatch<U extends unknown>(type: (param0: U) => Ingredient, codec: (param0: Ingredient) => StreamCodec<RegistryFriendlyByteBuf, U>): StreamCodec<RegistryFriendlyByteBuf, U>;
    encode(arg0: RegistryFriendlyByteBuf, arg1: Ingredient): void;
    map<O extends unknown>(to: (param0: Ingredient) => O, from: (param0: O) => Ingredient): StreamCodec<RegistryFriendlyByteBuf, O>;
    mapStream<O extends ByteBuf>(operation: (param0: O) => RegistryFriendlyByteBuf): StreamCodec<O, Ingredient>;
}