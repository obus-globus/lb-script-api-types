import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { EquipmentSlot$Type } from '../../../../net/minecraft/world/entity/EquipmentSlot$Type.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class EquipmentSlot extends Enum<EquipmentSlot> implements StringRepresentable {
    static BODY: EquipmentSlot;
    static BY_ID: (param0: EquipmentSlot) => unknown;
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
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EquipmentSlot;
    static values(): (Object | null)[];
    private constructor(type: EquipmentSlot$Type, index: number, countLimit: number, id: number, name: string)
    private constructor(type: EquipmentSlot$Type, index: number, filterFlag: number, name: string)
    // private countLimit: number;
    readonly id: number;
    readonly index: number;
    readonly name: string;
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