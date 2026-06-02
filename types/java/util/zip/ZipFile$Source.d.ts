import type { RandomAccessFile } from '../../../java/io/RandomAccessFile.d.ts'
import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { ZipCoder } from '../../../java/util/zip/ZipCoder.d.ts'
import type { ZipFile$EntryPos } from '../../../java/util/zip/ZipFile$EntryPos.d.ts'
import type { ZipFile$Source$End } from '../../../java/util/zip/ZipFile$Source$End.d.ts'
import type { ZipFile$Source$Key } from '../../../java/util/zip/ZipFile$Source$Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZipFile$Source extends Object {
    private constructor(arg0: ZipFile$Source$Key, arg1: boolean, arg2: ZipCoder)
    // private cen: number[];
    // private comment: number[];
    // private entries: number[];
    // private key: ZipFile$Source$Key;
    // private locpos: number;
    // private manifestNum: number;
    // private manifestPos: number;
    // private metaVersions: { [key: number]: BitSet };
    // private refs: number;
    // private signatureMetaNames: number[];
    // private startsWithLoc: boolean;
    // private table: number[];
    // private tablelen: number;
    // private total: number;
    // private zfile: RandomAccessFile;
    // private checkAndAddEntry(arg0: number, arg1: number, arg2: ZipCoder): number;
    // private checkExtraFields(arg0: number, arg1: number, arg2: number): void;
    // private checkZip64ExtraFieldValues(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    // private close(): void;
    // private findEND(): ZipFile$Source$End;
    // private getEntryHash(arg0: number): number;
    // private getEntryNext(arg0: number): number;
    // private getEntryPos(arg0: number): number;
    // private getEntryPos(arg0: string, arg1: boolean, arg2: ZipCoder): ZipFile$EntryPos;
    // private getMetaVersion(arg0: number, arg1: number): number;
    // private hasSlash(arg0: number[], arg1: number, arg2: number): boolean;
    // private initCEN(arg0: number, arg1: ZipCoder): void;
    // private isManifestName(arg0: number, arg1: number): boolean;
    // private isSignatureRelated(arg0: number, arg1: number): boolean;
    // private nextEntryPos(arg0: number, arg1: number, arg2: number): number;
    // private readAt(arg0: number[], arg1: number, arg2: number, arg3: number): number;
    // private readFullyAt(arg0: number[], arg1: number, arg2: number, arg3: number): number;
}