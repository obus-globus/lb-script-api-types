import type { MetadataDescriptor } from '../../../../jdk/jfr/internal/MetadataDescriptor.d.ts'
import type { RecordingInput } from '../../../../jdk/jfr/internal/consumer/RecordingInput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkHeader extends Object {
    static CHUNK_SIZE_POSITION: number;
    static HEADER_SIZE: number;
    constructor(arg0: RecordingInput)
    private constructor(arg0: RecordingInput, arg1: number, arg2: number)
    // private absoluteChunkEnd: number;
    readonly absoluteChunkStart: number;
    readonly absoluteEventStart: number;
    readonly chunkSize: number;
    // private chunkStartNanos: number;
    // private chunkStartTicks: number;
    readonly constantPoolPosition: number;
    readonly durationNanos: number;
    readonly finalChunk: boolean;
    readonly finished: boolean;
    // private id: number;
    readonly input: RecordingInput;
    readonly major: number;
    readonly metadataPosition: number;
    readonly minor: number;
    readonly ticksPerSecond: number;
    awaitFinished(): void;
    getAbsoluteChunkStart(): number;
    getAbsoluteEventStart(): number;
    getChunkSize(): number;
    getConstantPoolPosition(): number;
    getDurationNanos(): number;
    getEnd(): number;
    getEventStart(): number;
    getInput(): RecordingInput;
    getLastNanos(): number;
    getMajor(): number;
    getMetadataPosition(): number;
    getMinor(): number;
    getSize(): number;
    getStartNanos(): number;
    getStartTicks(): number;
    getTicksPerSecond(): number;
    isFinalChunk(): boolean;
    isFinished(): boolean;
    isLastChunk(): boolean;
    nextHeader(): ChunkHeader;
    // private readFileState(): number;
    readMetadata(): MetadataDescriptor;
    readMetadata(arg0: MetadataDescriptor): MetadataDescriptor;
    refresh(): void;
}