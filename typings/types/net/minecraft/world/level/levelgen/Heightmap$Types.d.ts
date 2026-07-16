import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Heightmap$Usage } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Usage.d.ts'
export class Heightmap$Types extends Enum<Heightmap$Types> implements StringRepresentable {
    static CODEC: Codec<Heightmap$Types>;
    static MOTION_BLOCKING: Heightmap$Types;
    static MOTION_BLOCKING_NO_LEAVES: Heightmap$Types;
    static OCEAN_FLOOR: Heightmap$Types;
    static OCEAN_FLOOR_WG: Heightmap$Types;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Heightmap$Types>;
    static WORLD_SURFACE: Heightmap$Types;
    static WORLD_SURFACE_WG: Heightmap$Types;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Heightmap$Types;
    static values(): Heightmap$Types[];
    private constructor(id: number, serializationKey: string, usage: Heightmap$Usage, isOpaque: (param0: BlockState) => boolean)
    // private id: number;
    // private isOpaque: (param0: BlockState) => boolean;
    readonly serializationKey: string;
    // private usage: Heightmap$Usage;
    getSerializationKey(): string;
    getSerializedName(): string;
    isOpaque(): (param0: BlockState) => boolean;
    keepAfterWorldgen(): boolean;
    sendToClient(): boolean;
    name(): "WORLD_SURFACE_WG" | "WORLD_SURFACE" | "OCEAN_FLOOR_WG" | "OCEAN_FLOOR" | "MOTION_BLOCKING" | "MOTION_BLOCKING_NO_LEAVES";
}