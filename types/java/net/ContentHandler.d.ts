import type { Class } from '../../java/lang/Class.d.ts'
import type { URLConnection } from '../../java/net/URLConnection.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ContentHandler extends Object {
    constructor()
    getContent(arg0: URLConnection): Object;
    getContent(arg0: URLConnection, arg1: Class<Object>[]): Object;
}