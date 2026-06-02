import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DumpArchiveConstants$SEGMENT_TYPE } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveConstants$SEGMENT_TYPE.d.ts'
export class DumpArchiveEntry$TapeSegmentHeader extends Object {
    constructor()
    readonly cdata: number[];
    readonly count: number;
    readonly holes: number;
    readonly ino: number;
    readonly type: DumpArchiveConstants$SEGMENT_TYPE;
    readonly volume: number;
    getCdata(arg0: number): number;
    getCount(): number;
    getHoles(): number;
    getIno(): number;
    getType(): DumpArchiveConstants$SEGMENT_TYPE;
    getVolume(): number;
    setIno(arg0: number): void;
}