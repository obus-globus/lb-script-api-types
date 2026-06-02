import type { Certificate } from '../java/security/cert/Certificate.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Cache$Entry$Companion } from '../okhttp3/Cache$Entry$Companion.d.ts'
import type { Handshake } from '../okhttp3/Handshake.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { DiskLruCache$Editor } from '../okhttp3/internal/cache/DiskLruCache$Editor.d.ts'
import type { DiskLruCache$Snapshot } from '../okhttp3/internal/cache/DiskLruCache$Snapshot.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class Cache$Entry extends Object {
    static Companion: Cache$Entry$Companion;
    constructor(response: Response)
    constructor(rawSource: Source)
    // private code: number;
    // private handshake: Handshake | null;
    // private message: string;
    // private protocol: Protocol;
    // private receivedResponseMillis: number;
    // private requestMethod: string;
    // private responseHeaders: Pair<string, string>[];
    // private sentRequestMillis: number;
    // private url: HttpUrl;
    // private varyHeaders: Pair<string, string>[];
    matches(request: Request, response: Response): boolean;
    // private readCertificateList(source: BufferedSource): Certificate[];
    response(snapshot: DiskLruCache$Snapshot): Response;
    // private writeCertList(sink: BufferedSink, certificates: Certificate[]): void;
    writeTo(editor: DiskLruCache$Editor): void;
}