import type { Object } from '../../../java/lang/Object.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
export class IdnaMappingTable extends Object {
    constructor(sections: string, ranges: string, mappings: string)
    readonly mappings: string;
    readonly ranges: string;
    readonly sections: string;
    // private findRangesOffset(codePoint: number, position: number, limit: number): number;
    // private findSectionsIndex(codePoint: number): number;
    map(codePoint: number, sink: BufferedSink): boolean;
}