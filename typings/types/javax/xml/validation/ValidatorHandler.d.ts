import type { TypeInfoProvider } from '../../../javax/xml/validation/TypeInfoProvider.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LSResourceResolver } from '../../../org/w3c/dom/ls/LSResourceResolver.d.ts'
import type { ContentHandler } from '../../../org/xml/sax/ContentHandler.d.ts'
import type { ErrorHandler } from '../../../org/xml/sax/ErrorHandler.d.ts'
export abstract class ValidatorHandler extends Object implements ContentHandler {
    constructor()
    declaration(arg0: string, arg1: string, arg2: string): void;
    getContentHandler(): ContentHandler;
    getErrorHandler(): ErrorHandler;
    getFeature(arg0: string): boolean;
    getProperty(arg0: string): Object;
    getResourceResolver(): LSResourceResolver;
    getTypeInfoProvider(): TypeInfoProvider;
    setContentHandler(arg0: ContentHandler): void;
    setErrorHandler(arg0: ErrorHandler): void;
    setFeature(arg0: string, arg1: boolean): void;
    setProperty(arg0: string, arg1: Object): void;
    setResourceResolver(arg0: LSResourceResolver): void;
}