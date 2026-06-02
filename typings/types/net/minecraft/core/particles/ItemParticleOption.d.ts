import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export class ItemParticleOption extends Object implements ParticleOptions {
    static codec(paramtype: ParticleType<ItemParticleOption>): MapCodec<ItemParticleOption>;
    static streamCodec(paramtype: ParticleType<ItemParticleOption>): StreamCodec<Object, ItemParticleOption>;
    constructor(type: ParticleType<ItemParticleOption>, item: Item)
    constructor(type: ParticleType<ItemParticleOption>, itemStack: ItemStackTemplate)
    // private itemStack: ItemStackTemplate;
    readonly type: ParticleType<ItemParticleOption>;
    getItem(): ItemStackTemplate;
    getType(): ParticleType<ItemParticleOption>;
}