import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { EquipmentSlot } from '../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class InteractionHand extends Enum<InteractionHand> {
    static MAIN_HAND: InteractionHand;
    static OFF_HAND: InteractionHand;
    static STREAM_CODEC: StreamCodec<ByteBuf, InteractionHand>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InteractionHand;
    static values(): InteractionHand[];
    private constructor(id: number)
    // private id: number;
    asEquipmentSlot(): EquipmentSlot;
    name(): "MAIN_HAND" | "OFF_HAND";
}