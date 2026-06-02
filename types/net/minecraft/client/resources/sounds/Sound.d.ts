import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sound$Type } from '../../../../../net/minecraft/client/resources/sounds/Sound$Type.d.ts'
import type { SoundEngine } from '../../../../../net/minecraft/client/sounds/SoundEngine.d.ts'
import type { Weighted } from '../../../../../net/minecraft/client/sounds/Weighted.d.ts'
import type { FileToIdConverter } from '../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { SampledFloat } from '../../../../../net/minecraft/util/valueproviders/SampledFloat.d.ts'
export class Sound extends Object implements Weighted<Sound> {
    static SOUND_LISTER: FileToIdConverter;
    constructor(location: Identifier, volume: SampledFloat, pitch: SampledFloat, weight: number, type: Sound$Type, stream: boolean, preload: boolean, attenuationDistance: number)
    readonly attenuationDistance: number;
    readonly location: Identifier;
    readonly pitch: SampledFloat;
    // private preload: boolean;
    // private stream: boolean;
    readonly type: Sound$Type;
    readonly volume: SampledFloat;
    readonly weight: number;
    getAttenuationDistance(): number;
    getLocation(): Identifier;
    getPath(): Identifier;
    getPitch(): SampledFloat;
    getSound(random: RandomSource): Sound;
    getType(): Sound$Type;
    getVolume(): SampledFloat;
    getWeight(): number;
    preloadIfRequired(soundEngine: SoundEngine): void;
    shouldPreload(): boolean;
    shouldStream(): boolean;
    toString(): string;
}