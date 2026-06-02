import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SoundBuffer extends Object {
    constructor(data: ByteBuffer, format: AudioFormat)
    // private alBuffer: number;
    // private data: ByteBuffer;
    // private format: AudioFormat;
    // private hasAlBuffer: boolean;
    // private size: number;
    discardAlBuffer(): void;
    format(): AudioFormat;
    getAlBuffer(): OptionalInt;
    isValid(): boolean;
    releaseAlBuffer(): OptionalInt;
    size(): number;
    // private viaFabricPlus$apply8BitMono(arg0: ByteBuffer): void;
    // private viaFabricPlus$apply8BitSound(arg0: ByteBuffer): void;
    // private viaFabricPlus$apply8BitStereo(arg0: ByteBuffer): void;
}