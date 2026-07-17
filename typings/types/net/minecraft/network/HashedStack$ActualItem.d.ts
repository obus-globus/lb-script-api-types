import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { TypedDataComponent } from '../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { HashedPatchMap } from '../../../net/minecraft/network/HashedPatchMap.d.ts'
import type { HashedPatchMap$HashGenerator } from '../../../net/minecraft/network/HashedPatchMap$HashGenerator.d.ts'
import type { HashedStack } from '../../../net/minecraft/network/HashedStack.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
export class HashedStack$ActualItem extends Record implements HashedStack {
    static EMPTY: HashedStack;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, HashedStack$ActualItem>;
    constructor(item: Holder<Item>, count: number, components: HashedPatchMap)
    // private components: HashedPatchMap;
    // private count: number;
    // private item: Holder<Item>;
    components(): HashedPatchMap;
    count(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Holder<Item>;
    matches(itemStack: ItemStack, hasher: (param0: TypedDataComponent<Object>) => number): boolean;
    toString(): string;
}