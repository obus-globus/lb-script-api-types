import type { FullMappings } from '../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RecipeDisplayRewriter$SlotDisplayConsumer } from '../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter$SlotDisplayConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RecipeDisplayRewriter<C extends ClientboundPacketType> extends Object {
    constructor(arg0: Protocol<C, Object, Object, Object>)
    // private protocol: Protocol<C, Object, Object, Object>;
    // private slotDisplayHandlers: { [key: string]: (param0: PacketWrapper) => void };
    handleDyedSlotDisplay(arg0: PacketWrapper): void;
    handleFurnace(arg0: PacketWrapper): void;
    handleIngredient(arg0: PacketWrapper): void;
    handleItem(arg0: PacketWrapper): void;
    handleItemId(arg0: PacketWrapper): void;
    handleOnlyWithComponentSlotDisplay(arg0: PacketWrapper): void;
    handleRecipeDisplay(arg0: PacketWrapper): void;
    handleShaped(arg0: PacketWrapper): void;
    handleShapeless(arg0: PacketWrapper): void;
    handleSlotDisplay(arg0: PacketWrapper): void;
    handleSlotDisplayList(arg0: PacketWrapper): void;
    handleSmithing(arg0: PacketWrapper): void;
    handleSmithingTrimSlotDisplay(arg0: PacketWrapper): void;
    handleStoneCutter(arg0: PacketWrapper): void;
    handleWithRemainderSlotDisplay(arg0: PacketWrapper): void;
    registerPlaceGhostRecipe(arg0: C): void;
    registerRecipeBookAdd(arg0: C): void;
    registerUpdateRecipes(arg0: C): void;
    rewriteItemId(arg0: number): number;
    rewriteItemIds(arg0: number[]): void;
    // private runSlotDisplayHandler(arg0: PacketWrapper, arg1: FullMappings, arg2: number): void;
}