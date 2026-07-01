import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { MessageDigestCalculatingInputStream$Builder } from '../../../../../org/apache/commons/io/input/MessageDigestCalculatingInputStream$Builder.d.ts'
import type { ObservableInputStream } from '../../../../../org/apache/commons/io/input/ObservableInputStream.d.ts'
export class MessageDigestCalculatingInputStream extends ObservableInputStream {
    static builder(): MessageDigestCalculatingInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: MessageDigest)
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: MessageDigestCalculatingInputStream$Builder, arg1: any)
    readonly messageDigest: MessageDigest;
    getMessageDigest(): MessageDigest;
}