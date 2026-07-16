import type { Audio } from '../../../../ai/djl/modality/audio/Audio.d.ts'
import type { AudioFactory } from '../../../../ai/djl/modality/audio/AudioFactory.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { AudioInputStream } from '../../../../javax/sound/sampled/AudioInputStream.d.ts'
export class SampledAudioFactory extends AudioFactory {
    static newInstance(): AudioFactory;
    constructor()
    // private bytesToFloats(arg0: number[], arg1: boolean): number[];
    fromFile(arg0: Path): Audio;
    fromInputStream(arg0: InputStream): Audio;
    // private read(arg0: AudioInputStream): number[];
    setChannels(arg0: number): AudioFactory;
    setSampleFormat(arg0: number): AudioFactory;
    setSampleRate(arg0: number): AudioFactory;
}