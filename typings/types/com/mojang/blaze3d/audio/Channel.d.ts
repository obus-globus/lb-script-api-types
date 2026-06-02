import type { SoundBuffer } from '../../../../com/mojang/blaze3d/audio/SoundBuffer.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AudioStream } from '../../../../net/minecraft/client/sounds/AudioStream.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Channel extends Object {
    static BUFFER_DURATION_SECONDS: number;
    private constructor(src: number)
    // private initialized: AtomicBoolean;
    // private source: number;
    // private stream: AudioStream;
    // private streamingBufferSize: number;
    attachBufferStream(stream: AudioStream): void;
    attachStaticBuffer(buffer: SoundBuffer): void;
    destroy(): void;
    disableAttenuation(): void;
    // private getState(): number;
    linearAttenuation(maxDistance: number): void;
    pause(): void;
    play(): void;
    playing(): boolean;
    // private pumpBuffers(size: number): void;
    // private removeProcessedBuffers(): number;
    setLooping(looping: boolean): void;
    setPitch(pitch: number): void;
    setRelative(relative: boolean): void;
    setSelfPosition(newPosition: Vec3): void;
    setVolume(volume: number): void;
    stop(): void;
    stopped(): boolean;
    unpause(): void;
    updateStream(): void;
}