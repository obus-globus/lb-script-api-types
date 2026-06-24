import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourcePack } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack.d.ts'
import type { PackType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PackType.d.ts'
export class ResourcePackDownloadTracker$Download extends Record {
    constructor(hash: number[], premium: boolean, type: PackType, chunkSize: number, receivedChunks: (Object | null)[], data: number[])
    // private chunkSize: number;
    // private data: number[];
    // private hash: number[];
    // private premium: boolean;
    // private receivedChunks: (Object | null)[];
    // private type: PackType;
    chunkSize(): number;
    data(): number[];
    equals(arg0: Object | null): boolean;
    // private hasReceivedAllChunks(): boolean;
    hash(): number[];
    hashCode(): number;
    premium(): boolean;
    processDataChunk(arg0: number, arg1: number[]): ResourcePack;
    receivedChunks(): (Object | null)[];
    toString(): string;
    type(): PackType;
}