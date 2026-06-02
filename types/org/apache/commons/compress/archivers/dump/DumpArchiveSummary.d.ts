import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class DumpArchiveSummary extends Object {
    constructor(arg0: number[], arg1: ZipEncoding)
    readonly devname: string;
    readonly dumpDate: number;
    // private filesys: string;
    // private firstrec: number;
    readonly flags: number;
    readonly hostname: string;
    readonly label: string;
    readonly level: number;
    // private ntrec: number;
    readonly previousDumpDate: number;
    readonly volume: number;
    equals(arg0: Object | null): boolean;
    getDevname(): string;
    getDumpDate(): Date;
    getFilesystem(): string;
    getFirstRecord(): number;
    getFlags(): number;
    getHostname(): string;
    getLabel(): string;
    getLevel(): number;
    getNTRec(): number;
    getPreviousDumpDate(): Date;
    getVolume(): number;
    hashCode(): number;
    isCompressed(): boolean;
    isExtendedAttributes(): boolean;
    isMetaDataOnly(): boolean;
    isNewHeader(): boolean;
    isNewInode(): boolean;
    setDevname(arg0: string): void;
    setDumpDate(arg0: Date): void;
    setFilesystem(arg0: string): void;
    setFirstRecord(arg0: number): void;
    setFlags(arg0: number): void;
    setHostname(arg0: string): void;
    setLabel(arg0: string): void;
    setLevel(arg0: number): void;
    setNTRec(arg0: number): void;
    setPreviousDumpDate(arg0: Date): void;
    setVolume(arg0: number): void;
}