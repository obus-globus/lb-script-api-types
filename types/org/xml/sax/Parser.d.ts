import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DTDHandler } from '../../../org/xml/sax/DTDHandler.d.ts'
import type { DocumentHandler } from '../../../org/xml/sax/DocumentHandler.d.ts'
import type { EntityResolver } from '../../../org/xml/sax/EntityResolver.d.ts'
import type { ErrorHandler } from '../../../org/xml/sax/ErrorHandler.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
export interface Parser extends Object{
    parse(arg0: string): void;
    parse(arg0: InputSource): void;
    setDTDHandler(arg0: DTDHandler): void;
    setDocumentHandler(arg0: DocumentHandler): void;
    setEntityResolver(arg0: EntityResolver): void;
    setErrorHandler(arg0: ErrorHandler): void;
    setLocale(arg0: Locale): void;
}