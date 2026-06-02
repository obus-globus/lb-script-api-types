import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RecipeRewriter$RecipeConsumer extends Object{
    accept(arg0: PacketWrapper): void;
}