import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamCodec$CodecOperation } from '../../../../../../net/minecraft/network/codec/StreamCodec$CodecOperation.d.ts'
import type { Ingredient } from '../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class OptionalCustomIngredientStreamCodec extends Object implements StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>> {
    constructor(arg0: StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>>)
    // private fallback: StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>>;
    apply<O extends unknown>(operation: (param0: StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>>) => StreamCodec<RegistryFriendlyByteBuf, O>): StreamCodec<RegistryFriendlyByteBuf, O>;
    cast<S extends B>(): StreamCodec<S, Optional<Ingredient>>;
    decode(arg0: RegistryFriendlyByteBuf): Optional<Ingredient>;
    dispatch<U extends unknown>(type: (param0: U) => Optional<Ingredient>, codec: (param0: Optional<Ingredient>) => StreamCodec<RegistryFriendlyByteBuf, U>): StreamCodec<RegistryFriendlyByteBuf, U>;
    encode(arg0: RegistryFriendlyByteBuf, arg1: Optional<Ingredient>): void;
    map<O extends unknown>(to: (param0: Optional<Ingredient>) => O, from: (param0: O) => Optional<Ingredient>): StreamCodec<RegistryFriendlyByteBuf, O>;
    mapStream<O extends ByteBuf>(operation: (param0: O) => RegistryFriendlyByteBuf): StreamCodec<O, Optional<Ingredient>>;
}