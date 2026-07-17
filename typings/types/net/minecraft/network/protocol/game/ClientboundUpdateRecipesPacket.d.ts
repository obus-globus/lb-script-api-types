import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RecipePropertySet } from '../../../../../net/minecraft/world/item/crafting/RecipePropertySet.d.ts'
import type { SelectableRecipe$SingleInputSet } from '../../../../../net/minecraft/world/item/crafting/SelectableRecipe$SingleInputSet.d.ts'
import type { StonecutterRecipe } from '../../../../../net/minecraft/world/item/crafting/StonecutterRecipe.d.ts'
export class ClientboundUpdateRecipesPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateRecipesPacket>;
    constructor(itemSets: JavaMap<ResourceKey<RecipePropertySet>, RecipePropertySet>, stonecutterRecipes: SelectableRecipe$SingleInputSet<StonecutterRecipe>)
    // private itemSets: JavaMap<ResourceKey<RecipePropertySet>, RecipePropertySet>;
    // private stonecutterRecipes: SelectableRecipe$SingleInputSet<StonecutterRecipe>;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    itemSets(): JavaMap<ResourceKey<RecipePropertySet>, RecipePropertySet>;
    stonecutterRecipes(): SelectableRecipe$SingleInputSet<StonecutterRecipe>;
    toString(): string;
    type(): PacketType<ClientboundUpdateRecipesPacket>;
}