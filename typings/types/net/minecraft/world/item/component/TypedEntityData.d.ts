import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class TypedEntityData<IdType extends unknown> extends Object implements TooltipProvider {
    static codec<T extends unknown>(paramtypeCodec: Codec<T>): Codec<TypedEntityData<T>>;
    static of<T extends unknown>(paramtype: T, paramdata: CompoundTag): TypedEntityData<T>;
    static streamCodec<B extends ByteBuf, T extends unknown>(paramtypeCodec: StreamCodec<B, T>): StreamCodec<B, TypedEntityData<T>>;
    private constructor(type: IdType, data: CompoundTag)
    // private tag: CompoundTag;
    // private type: IdType;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    contains(name: string): boolean;
    copyTagWithoutId(): CompoundTag;
    equals(obj: Object | null): boolean;
    getUnsafe(): CompoundTag;
    hashCode(): number;
    loadInto(entity: Entity): void;
    loadInto(blockEntity: BlockEntity, registries: HolderLookup$Provider): boolean;
    // private tag(): CompoundTag;
    toString(): string;
    type(): IdType;
}