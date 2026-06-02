import type { URLStreamHandler } from '../../../../java/net/URLStreamHandler.d.ts'
import type { URLStreamHandlerFactory } from '../../../../java/net/URLStreamHandlerFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MemoryURLStreamHandlerFactory extends Object implements URLStreamHandlerFactory {
    constructor()
    createURLStreamHandler(arg0: string): URLStreamHandler;
}