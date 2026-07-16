import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { TropicalFish$Base } from '../../../../../../net/minecraft/world/entity/animal/fish/TropicalFish$Base.d.ts'
import type { Item$TooltipContext } from '../../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class TropicalFish$Pattern extends Enum<TropicalFish$Pattern> implements StringRepresentable, TooltipProvider {
    static BETTY: TropicalFish$Pattern;
    static BLOCKFISH: TropicalFish$Pattern;
    static BRINELY: TropicalFish$Pattern;
    static CLAYFISH: TropicalFish$Pattern;
    static CODEC: Codec<TropicalFish$Pattern>;
    static DASHER: TropicalFish$Pattern;
    static FLOPPER: TropicalFish$Pattern;
    static GLITTER: TropicalFish$Pattern;
    static KOB: TropicalFish$Pattern;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SNOOPER: TropicalFish$Pattern;
    static SPOTTY: TropicalFish$Pattern;
    static STREAM_CODEC: StreamCodec<ByteBuf, TropicalFish$Pattern>;
    static STRIPEY: TropicalFish$Pattern;
    static SUNSTREAK: TropicalFish$Pattern;
    static byId(parampackedId: number): TropicalFish$Pattern;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TropicalFish$Pattern;
    static values(): TropicalFish$Pattern[];
    private constructor(name: string, base: TropicalFish$Base, index: number)
    // private base: TropicalFish$Base;
    // private displayName: Component;
    // private name: string;
    readonly packedId: number;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    base(): TropicalFish$Base;
    displayName(): Component;
    getPackedId(): number;
    getSerializedName(): string;
    name(): "KOB" | "SUNSTREAK" | "SNOOPER" | "DASHER" | "BRINELY" | "SPOTTY" | "FLOPPER" | "STRIPEY" | "GLITTER" | "BLOCKFISH" | "BETTY" | "CLAYFISH";
}