import type { Packet } from '../../../../com/jcraft/jogg/Packet.d.ts'
import type { Page } from '../../../../com/jcraft/jogg/Page.d.ts'
import type { StreamState } from '../../../../com/jcraft/jogg/StreamState.d.ts'
import type { SyncState } from '../../../../com/jcraft/jogg/SyncState.d.ts'
import type { Block } from '../../../../com/jcraft/jorbis/Block.d.ts'
import type { DspState } from '../../../../com/jcraft/jorbis/DspState.d.ts'
import type { Info } from '../../../../com/jcraft/jorbis/Info.d.ts'
import type { FloatConsumer } from '../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FloatSampleSource } from '../../../../net/minecraft/client/sounds/FloatSampleSource.d.ts'
export class JOrbisAudioStream extends Object implements FloatSampleSource {
    static EXPECTED_MAX_FRAME_SIZE: number;
    constructor(input: InputStream)
    // private audioFormat: AudioFormat;
    // private block: Block;
    // private dspState: DspState;
    // private info: Info;
    // private input: InputStream;
    // private packet: Packet;
    // private page: Page;
    // private samplesWritten: number;
    // private streamState: StreamState;
    // private syncState: SyncState;
    // private totalSamplesInStream: number;
    close(): void;
    getFormat(): AudioFormat;
    // private getSamplesToWrite(samples: number): number;
    read(expectedSize: number): ByteBuffer;
    readAll(): ByteBuffer;
    readChunk(consumer: (param0: number) => void): boolean;
    // private readIdentificationPacket(firstPage: Page): Packet;
    // private readPacket(): Packet;
    // private readPage(): Page;
    // private readToBuffer(): boolean;
}