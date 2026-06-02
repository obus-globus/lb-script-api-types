import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { MessageDigestInputStream } from '../../../../../org/apache/commons/io/input/MessageDigestInputStream.d.ts'
import type { ObservableInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ObservableInputStream$AbstractBuilder.d.ts'
export class MessageDigestInputStream$Builder extends ObservableInputStream$AbstractBuilder<MessageDigestInputStream$Builder> {
    constructor()
    // private messageDigest: MessageDigest;
    get(): MessageDigestInputStream;
    setMessageDigest(arg0: MessageDigest): MessageDigestInputStream$Builder;
    setMessageDigest(arg0: string): MessageDigestInputStream$Builder;
}