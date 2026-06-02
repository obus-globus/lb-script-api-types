import type { Result } from '../../../javax/xml/transform/Result.d.ts'
import type { Source } from '../../../javax/xml/transform/Source.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LSResourceResolver } from '../../../org/w3c/dom/ls/LSResourceResolver.d.ts'
import type { ErrorHandler } from '../../../org/xml/sax/ErrorHandler.d.ts'
export abstract class Validator extends Object {
    constructor()
    getErrorHandler(): ErrorHandler;
    getFeature(arg0: string): boolean;
    getProperty(arg0: string): Object;
    getResourceResolver(): LSResourceResolver;
    reset(): void;
    setErrorHandler(arg0: ErrorHandler): void;
    setFeature(arg0: string, arg1: boolean): void;
    setProperty(arg0: string, arg1: Object): void;
    setResourceResolver(arg0: LSResourceResolver): void;
    validate(arg0: Source): void;
    validate(arg0: Source, arg1: Result): void;
}