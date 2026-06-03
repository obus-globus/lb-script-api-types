import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractLanguageDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    equals(receiver: Object, otherImpl: Object): boolean;
    equals(other: Object | null): boolean;
    getDefaultMimeType(receiver: Object): string;
    getId(receiver: Object): string;
    getImplementationName(receiver: Object): string;
    getMimeTypes(receiver: Object): string[];
    getName(receiver: Object): string;
    getOptions(receiver: Object): OptionDescriptor[];
    getSourceOptions(receiver: Object): OptionDescriptor[];
    getVersion(receiver: Object): string;
    getWebsite(receiver: Object): string;
    hashCode(): number;
    hashCode(receiver: Object): number;
    isInteractive(receiver: Object): boolean;
}