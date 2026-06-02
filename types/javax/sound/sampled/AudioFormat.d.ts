import type { AudioFormat$Encoding } from '../../../javax/sound/sampled/AudioFormat$Encoding.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AudioFormat extends Object {
    constructor(arg0: AudioFormat$Encoding, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean)
    constructor(arg0: AudioFormat$Encoding, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: { [key: string]: Object })
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    bigEndian: boolean;
    channels: number;
    encoding: AudioFormat$Encoding;
    frameRate: number;
    frameSize: number;
    // private properties: { [key: string]: Object };
    sampleRate: number;
    sampleSizeInBits: number;
    getChannels(): number;
    getEncoding(): AudioFormat$Encoding;
    getFrameRate(): number;
    getFrameSize(): number;
    getProperty(arg0: string): Object;
    getSampleRate(): number;
    getSampleSizeInBits(): number;
    isBigEndian(): boolean;
    matches(arg0: AudioFormat): boolean;
    properties(): { [key: string]: Object };
    toString(): string;
}