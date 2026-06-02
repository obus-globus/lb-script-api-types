import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
export class SSLSessionBindingEvent extends EventObject {
    constructor(arg0: SSLSession, arg1: string)
    readonly name: string;
    getName(): string;
    getSession(): SSLSession;
}