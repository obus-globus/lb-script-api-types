import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RtspMethods extends Object {
    static ANNOUNCE: HttpMethod;
    static DESCRIBE: HttpMethod;
    static GET_PARAMETER: HttpMethod;
    static OPTIONS: HttpMethod;
    static PAUSE: HttpMethod;
    static PLAY: HttpMethod;
    static RECORD: HttpMethod;
    static REDIRECT: HttpMethod;
    static SETUP: HttpMethod;
    static SET_PARAMETER: HttpMethod;
    static TEARDOWN: HttpMethod;
    static valueOf(paramarg0: string): HttpMethod;
    private constructor()
}