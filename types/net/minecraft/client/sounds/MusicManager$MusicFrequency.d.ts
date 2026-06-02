import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Music } from '../../../../net/minecraft/sounds/Music.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class MusicManager$MusicFrequency extends Enum<MusicManager$MusicFrequency> implements StringRepresentable {
    static CODEC: Codec<MusicManager$MusicFrequency>;
    static CONSTANT: MusicManager$MusicFrequency;
    static DEFAULT: MusicManager$MusicFrequency;
    static FREQUENT: MusicManager$MusicFrequency;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MusicManager$MusicFrequency;
    static values(): (Object | null)[];
    private constructor(name: string, translationKey: string, maxFrequencyMinutes: number)
    // private caption: Component;
    // private maxFrequency: number;
    // private name: string;
    caption(): Component;
    // private getNextSongDelay(music: Music, random: RandomSource): number;
    getSerializedName(): string;
    name(): "DEFAULT" | "FREQUENT" | "CONSTANT";
}