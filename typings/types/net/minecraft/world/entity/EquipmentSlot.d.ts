import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { EquipmentSlot$Type } from '../../../../net/minecraft/world/entity/EquipmentSlot$Type.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class EquipmentSlot extends Enum<EquipmentSlot> implements StringRepresentable {
    static BODY: EquipmentSlot;
    static BY_ID: (param0: number) => EquipmentSlot;
    static CHEST: EquipmentSlot;
    static CODEC: StringRepresentable$EnumCodec<EquipmentSlot>;
    static FEET: EquipmentSlot;
    static HEAD: EquipmentSlot;
    static LEGS: EquipmentSlot;
    static MAINHAND: EquipmentSlot;
    static NO_COUNT_LIMIT: number;
    static OFFHAND: EquipmentSlot;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SADDLE: EquipmentSlot;
    static STREAM_CODEC: StreamCodec<ByteBuf, EquipmentSlot>;
    static VALUES: EquipmentSlot[];
    static byName(paramname: string): EquipmentSlot;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): EquipmentSlot;
    static values(): EquipmentSlot[];
    private constructor(type: EquipmentSlot$Type, index: number, countLimit: number, id: number, name: string)
    private constructor(type: EquipmentSlot$Type, index: number, filterFlag: number, name: string)
    // private countLimit: number;
    readonly id: number;
    readonly index: number;
    readonly type: EquipmentSlot$Type;
    canIncreaseExperience(): boolean;
    getFilterBit(offset: number): number;
    getId(): number;
    getIndex(): number;
    getIndex(base: number): number;
    getName(): string;
    getSerializedName(): string;
    getType(): EquipmentSlot$Type;
    isArmor(): boolean;
    limit(toEquip: ItemStack): ItemStack;
    name(): "MAINHAND" | "OFFHAND" | "FEET" | "LEGS" | "CHEST" | "HEAD" | "BODY" | "SADDLE";
}