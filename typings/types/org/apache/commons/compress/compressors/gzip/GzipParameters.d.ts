import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtraField$SubField } from '../../../../../../org/apache/commons/compress/compressors/gzip/ExtraField$SubField.d.ts'
import type { GzipParameters$OS } from '../../../../../../org/apache/commons/compress/compressors/gzip/GzipParameters$OS.d.ts'
export class GzipParameters extends Object {
    constructor()
    readonly bufferSize: number;
    readonly comment: string;
    readonly compressionLevel: number;
    readonly deflateStrategy: number;
    readonly extraField: ExtraField$SubField[];
    readonly fileName: string;
    readonly fileNameCharset: Charset;
    // private headerCrc: boolean;
    readonly modificationInstant: Instant;
    readonly operatingSystem: GzipParameters$OS;
    readonly trailerCrc: number;
    readonly trailerISize: number;
    equals(arg0: Object | null): boolean;
    getBufferSize(): number;
    getComment(): string;
    getCompressionLevel(): number;
    getDeflateStrategy(): number;
    getExtraField(): ExtraField$SubField[];
    getFileName(): string;
    getFileNameCharset(): Charset;
    getFilename(): string;
    getHeaderCRC(): boolean;
    getModificationInstant(): Instant;
    getModificationTime(): number;
    getOS(): GzipParameters$OS;
    getOperatingSystem(): number;
    getTrailerCrc(): number;
    getTrailerISize(): number;
    hashCode(): number;
    // private requireNonNulByte(arg0: string): string;
    setBufferSize(arg0: number): void;
    setComment(arg0: string): void;
    setCompressionLevel(arg0: number): void;
    setDeflateStrategy(arg0: number): void;
    setExtraField(arg0: ExtraField$SubField[]): void;
    setFileName(arg0: string): void;
    setFileNameCharset(arg0: Charset): void;
    setFilename(arg0: string): void;
    setHeaderCRC(arg0: boolean): void;
    setModificationInstant(arg0: Instant): void;
    setModificationTime(arg0: number): void;
    setOS(arg0: GzipParameters$OS): void;
    setOperatingSystem(arg0: number): void;
    setTrailerCrc(arg0: number): void;
    setTrailerISize(arg0: number): void;
    toString(): string;
}