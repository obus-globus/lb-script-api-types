import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Axolotl$Variant extends Enum<Axolotl$Variant> implements StringRepresentable {
    static BLUE: Axolotl$Variant;
    static CODEC: Codec<Axolotl$Variant>;
    static CYAN: Axolotl$Variant;
    static DEFAULT: Axolotl$Variant;
    static GOLD: Axolotl$Variant;
    static LEGACY_CODEC: Codec<Axolotl$Variant>;
    static LUCY: Axolotl$Variant;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Axolotl$Variant>;
    static WILD: Axolotl$Variant;
    static byId(paramid: number): Axolotl$Variant;
    static getCommonSpawnVariant(paramrandom: RandomSource): Axolotl$Variant;
    static getRareSpawnVariant(paramrandom: RandomSource): Axolotl$Variant;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Axolotl$Variant;
    static values(): Axolotl$Variant[];
    private constructor(id: number, name: string, common: boolean)
    // private common: boolean;
    readonly id: number;
    getId(): number;
    getName(): string;
    getSerializedName(): string;
    name(): "LUCY" | "WILD" | "GOLD" | "CYAN" | "BLUE";
}