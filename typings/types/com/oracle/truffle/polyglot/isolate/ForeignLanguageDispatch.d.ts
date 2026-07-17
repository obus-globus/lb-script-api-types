import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractLanguageDispatch } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractLanguageDispatch.d.ts'
export abstract class ForeignLanguageDispatch extends AbstractPolyglotImpl$AbstractLanguageDispatch {
    constructor(polyglot: AbstractPolyglotImpl)
    equals(impl: Object, otherImpl: Object): boolean;
    equals(other: Object | null): boolean;
    getMimeTypes(receiver: Object): string[];
    getOptions(receiver: Object): OptionDescriptor[];
    getSourceOptions(receiver: Object): OptionDescriptor[];
}