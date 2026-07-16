import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class EquipmentSlotGroup {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static ANY: EquipmentSlot[];
    static ARMOR: EquipmentSlot[];
    static BODY: EquipmentSlot[];
    static BY_ID: (param0: number) => EquipmentSlot[];
    static CHEST: EquipmentSlot[];
    static CODEC: Codec<EquipmentSlot[]>;
    static FEET: EquipmentSlot[];
    static HAND: EquipmentSlot[];
    static HEAD: EquipmentSlot[];
    static LEGS: EquipmentSlot[];
    static MAINHAND: EquipmentSlot[];
    static OFFHAND: EquipmentSlot[];
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SADDLE: EquipmentSlot[];
    static STREAM_CODEC: StreamCodec<ByteBuf, EquipmentSlot[]>;
    static bySlot(paramslot: EquipmentSlot): EquipmentSlot[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): EquipmentSlot[];
    static values(): EquipmentSlot[][];
}