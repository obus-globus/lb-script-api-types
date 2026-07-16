import type { Audio } from '../../../../ai/djl/modality/audio/Audio.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AudioFactory extends Object {
    static newInstance(): AudioFactory;
    constructor()
    channels: number;
    sampleFormat: number;
    sampleRate: number;
    fromData(arg0: number[]): Audio;
    fromFile(arg0: Path): Audio;
    fromInputStream(arg0: InputStream): Audio;
    fromNDArray(arg0: NDArray): Audio;
    fromUrl(arg0: URL): Audio;
    fromUrl(arg0: string): Audio;
    getChannels(): number;
    getSampleFormat(): number;
    getSampleRate(): number;
    setChannels(arg0: number): AudioFactory;
    setSampleFormat(arg0: number): AudioFactory;
    setSampleRate(arg0: number): AudioFactory;
}