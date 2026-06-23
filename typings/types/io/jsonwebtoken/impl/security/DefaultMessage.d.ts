import type { Message } from '../../../../io/jsonwebtoken/security/Message.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultMessage<T extends unknown> extends Object implements Message<T> {
    constructor(arg0: T)
    readonly payload: T;
    assertBytePayload(arg0: number[]): void;
    getPayload(): T;
}