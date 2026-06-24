import type { MessageDigestInputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { MessageDigestInputStream$Builder } from '../../../../../org/apache/commons/io/input/MessageDigestInputStream$Builder.d.ts'
import type { ObservableInputStream } from '../../../../../org/apache/commons/io/input/ObservableInputStream.d.ts'
export class MessageDigestInputStream extends ObservableInputStream {
    static builder(): MessageDigestInputStream$Builder;
    static nullInputStream(): InputStream;
    private constructor(arg0: MessageDigestInputStream$Builder)
    constructor(arg0: MessageDigestInputStream$Builder, arg1: MessageDigestInputStream$1)
    readonly messageDigest: MessageDigest;
    getMessageDigest(): MessageDigest;
}