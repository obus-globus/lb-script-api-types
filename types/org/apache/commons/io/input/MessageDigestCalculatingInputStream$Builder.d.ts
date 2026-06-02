import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { MessageDigestCalculatingInputStream } from '../../../../../org/apache/commons/io/input/MessageDigestCalculatingInputStream.d.ts'
import type { ObservableInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ObservableInputStream$AbstractBuilder.d.ts'
export class MessageDigestCalculatingInputStream$Builder extends ObservableInputStream$AbstractBuilder<MessageDigestCalculatingInputStream$Builder> {
    constructor()
    readonly messageDigest: MessageDigest;
    get(): MessageDigestCalculatingInputStream;
    setMessageDigest(arg0: MessageDigest): void;
    setMessageDigest(arg0: string): void;
}