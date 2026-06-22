import type { Object } from '../../../java/lang/Object.d.ts'
import type { ContentHandler } from '../../../org/xml/sax/ContentHandler.d.ts'
import type { DTDHandler } from '../../../org/xml/sax/DTDHandler.d.ts'
import type { EntityResolver } from '../../../org/xml/sax/EntityResolver.d.ts'
import type { ErrorHandler } from '../../../org/xml/sax/ErrorHandler.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
import type { XMLReader } from '../../../org/xml/sax/XMLReader.d.ts'
export interface XMLFilter extends Object, XMLReader{
    getContentHandler(): ContentHandler;
    getDTDHandler(): DTDHandler;
    getEntityResolver(): EntityResolver;
    getErrorHandler(): ErrorHandler;
    getFeature(arg0: string): boolean;
    getParent(): XMLReader;
    getProperty(arg0: string): Object;
    parse(arg0: string): void;
    parse(arg0: InputSource): void;
    setContentHandler(arg0: ContentHandler): void;
    setDTDHandler(arg0: DTDHandler): void;
    setEntityResolver(arg0: EntityResolver): void;
    setErrorHandler(arg0: ErrorHandler): void;
    setFeature(arg0: string, arg1: boolean): void;
    setParent(arg0: XMLReader): void;
    setProperty(arg0: string, arg1: Object): void;
}