import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Music } from '../../../../net/minecraft/sounds/Music.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class MusicManager$MusicFrequency extends Enum<MusicManager$MusicFrequency> implements StringRepresentable {
    static CODEC: Codec<MusicManager$MusicFrequency>;
    static CONSTANT: MusicManager$MusicFrequency;
    static DEFAULT: MusicManager$MusicFrequency;
    static FREQUENT: MusicManager$MusicFrequency;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MusicManager$MusicFrequency;
    static values(): MusicManager$MusicFrequency[];
    private constructor(name: string, translationKey: string, maxFrequencyMinutes: number)
    // private caption: Component;
    // private maxFrequency: number;
    // private name: string;
    caption(): Component;
    // private getNextSongDelay(music: Music, random: RandomSource): number;
    getSerializedName(): string;
    name(): "DEFAULT" | "FREQUENT" | "CONSTANT";
}