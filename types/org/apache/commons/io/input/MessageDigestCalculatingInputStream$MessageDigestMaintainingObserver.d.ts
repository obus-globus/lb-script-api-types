import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { ObservableInputStream$Observer } from '../../../../../org/apache/commons/io/input/ObservableInputStream$Observer.d.ts'
export class MessageDigestCalculatingInputStream$MessageDigestMaintainingObserver extends ObservableInputStream$Observer {
    constructor(arg0: MessageDigest)
    // private messageDigest: MessageDigest;
    data(arg0: number[], arg1: number, arg2: number): void;
    data(arg0: number): void;
}