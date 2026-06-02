import type { Object } from '../../java/lang/Object.d.ts'
import type { Path } from '../../okio/Path.d.ts'
export class ZipEntry extends Object {
    constructor(canonicalPath: Path, isDirectory: boolean, comment: string, crc: number, compressedSize: number, size: number, compressionMethod: number, offset: number, dosLastModifiedAtDate: number, dosLastModifiedAtTime: number, ntfsLastModifiedAtFiletime: number | null, ntfsLastAccessedAtFiletime: number | null, ntfsCreatedAtFiletime: number | null, extendedLastModifiedAtSeconds: number | null, extendedLastAccessedAtSeconds: number | null, extendedCreatedAtSeconds: number | null)
    readonly canonicalPath: Path;
    readonly children: Path[];
    readonly comment: string;
    readonly compressedSize: number;
    readonly compressionMethod: number;
    readonly crc: number;
    /*not mapped: */ getCreatedAtMillis$okio(): number | null;
    readonly dosLastModifiedAtDate: number;
    readonly dosLastModifiedAtTime: number;
    readonly extendedCreatedAtSeconds: number | null;
    readonly extendedLastAccessedAtSeconds: number | null;
    readonly extendedLastModifiedAtSeconds: number | null;
    // private isDirectory: boolean;
    /*not mapped: */ isDirectory(): boolean;
    /*not mapped: */ getLastAccessedAtMillis$okio(): number | null;
    /*not mapped: */ getLastModifiedAtMillis$okio(): number | null;
    readonly ntfsCreatedAtFiletime: number | null;
    readonly ntfsLastAccessedAtFiletime: number | null;
    readonly ntfsLastModifiedAtFiletime: number | null;
    readonly offset: number;
    readonly size: number;
    copy(extendedLastModifiedAtSeconds: number | null, extendedLastAccessedAtSeconds: number | null, extendedCreatedAtSeconds: number | null): ZipEntry;
}