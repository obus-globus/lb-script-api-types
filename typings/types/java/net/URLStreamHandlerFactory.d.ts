import type { URLStreamHandler } from '../../java/net/URLStreamHandler.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface URLStreamHandlerFactory extends Object{
    createURLStreamHandler(arg0: string): URLStreamHandler;
}