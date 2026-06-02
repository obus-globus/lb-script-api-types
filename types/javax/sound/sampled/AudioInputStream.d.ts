import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { AudioFormat } from '../../../javax/sound/sampled/AudioFormat.d.ts'
import type { TargetDataLine } from '../../../javax/sound/sampled/TargetDataLine.d.ts'
export class AudioInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: AudioFormat, arg2: number)
    constructor(arg0: TargetDataLine)
    format: AudioFormat;
    frameLength: number;
    // private framePos: number;
    // private frameSize: number;
    // private markPushBackBuffer: number[];
    // private markPushBackLen: number;
    // private markpos: number;
    // private pushBackBuffer: number[];
    // private pushBackLen: number;
    // private stream: InputStream;
    available(): number;
    close(): void;
    getFormat(): AudioFormat;
    getFrameLength(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}