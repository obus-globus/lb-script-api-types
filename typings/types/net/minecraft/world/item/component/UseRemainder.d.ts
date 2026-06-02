import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { UseRemainder$OnExtraCreatedRemainder } from '../../../../../net/minecraft/world/item/component/UseRemainder$OnExtraCreatedRemainder.d.ts'
export class UseRemainder extends Record {
    static CODEC: Codec<UseRemainder>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, UseRemainder>;
    constructor(convertInto: ItemStackTemplate)
    // private convertInto: ItemStackTemplate;
    convertInto(): ItemStackTemplate;
    convertIntoRemainder(usedStack: ItemStack, stackCountBeforeUsing: number, hasInfiniteMaterials: boolean, onExtraCreatedRemainder: (param0: ItemStack) => void): ItemStack;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}