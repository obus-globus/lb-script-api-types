import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { AbstractPolyglotImpl$AbstractLanguageDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractLanguageDispatch.d.ts'
export class PolyglotLanguageDispatch extends AbstractPolyglotImpl$AbstractLanguageDispatch {
    constructor(impl: PolyglotImpl)
    equals(receiver: Object, otherImpl: Object): boolean;
    getDefaultMimeType(receiver: Object): string;
    getId(receiver: Object): string;
    getImplementationName(receiver: Object): string;
    getMimeTypes(receiver: Object): string[];
    getName(receiver: Object): string;
    getOptions(receiver: Object): OptionDescriptor[];
    getSourceOptions(receiver: Object): OptionDescriptor[];
    getVersion(receiver: Object): string;
    getWebsite(receiver: Object): string;
    hashCode(receiver: Object): number;
    isInteractive(receiver: Object): boolean;
}