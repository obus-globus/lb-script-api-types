import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CodeSigner } from '../../../java/security/CodeSigner.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { Manifest } from '../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Resource extends Object {
    constructor()
    // private cis: InputStream;
    // private cachedInputStream(): InputStream;
    getByteBuffer(): ByteBuffer;
    getBytes(): number[];
    getCertificates(): Certificate[];
    getCodeSigners(): CodeSigner[];
    getCodeSourceURL(): URL;
    getContentLength(): number;
    getDataError(): Exception;
    getInputStream(): InputStream;
    getManifest(): Manifest;
    getName(): string;
    getURL(): URL;
}