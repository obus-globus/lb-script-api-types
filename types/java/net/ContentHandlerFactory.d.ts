import type { ContentHandler } from '../../java/net/ContentHandler.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ContentHandlerFactory extends Object{
    createContentHandler(arg0: string): ContentHandler;
}