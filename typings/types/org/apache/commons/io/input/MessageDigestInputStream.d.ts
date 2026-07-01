import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { MessageDigestInputStream$Builder } from '../../../../../org/apache/commons/io/input/MessageDigestInputStream$Builder.d.ts'
import type { ObservableInputStream } from '../../../../../org/apache/commons/io/input/ObservableInputStream.d.ts'
export class MessageDigestInputStream extends ObservableInputStream {
    static builder(): MessageDigestInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: MessageDigestInputStream$Builder, arg1: any)
    readonly messageDigest: MessageDigest;
    getMessageDigest(): MessageDigest;
}