import type { Closeable } from '../java/io/Closeable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { MultipartReader$Companion } from '../okhttp3/MultipartReader$Companion.d.ts'
import type { MultipartReader$Part } from '../okhttp3/MultipartReader$Part.d.ts'
import type { MultipartReader$PartSource } from '../okhttp3/MultipartReader$PartSource.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class MultipartReader extends Object implements Closeable {
    static Companion: MultipartReader$Companion;
    constructor(response: ResponseBody)
    constructor(source: BufferedSource, boundary: string)
    // private boundary: string;
    /*not mapped: */ boundary(): string;
    // private closed: boolean;
    // private crlfDashDashBoundary: ByteString;
    // private currentPart: MultipartReader$PartSource | null;
    // private dashDashBoundary: ByteString;
    // private noMoreParts: boolean;
    // private partCount: number;
    // private source: BufferedSource;
    close(): void;
    // private currentPartBytesRemaining(maxByteCount: number): number;
    nextPart(): MultipartReader$Part | null;
}