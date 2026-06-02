import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { AbstractPolyglotImpl$AbstractLanguageDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractLanguageDispatch.d.ts'
export class Language extends Object {
    constructor(dispatch: AbstractPolyglotImpl$AbstractLanguageDispatch, receiver: Object, engine: Engine)
    // private dispatch: AbstractPolyglotImpl$AbstractLanguageDispatch;
    // private engine: Engine;
    // private receiver: Object;
    equals(obj: Object | null): boolean;
    getDefaultMimeType(): string;
    getId(): string;
    getImplementationName(): string;
    getMimeTypes(): string[];
    getName(): string;
    getOptions(): OptionDescriptor[];
    getSourceOptions(): OptionDescriptor[];
    getVersion(): string;
    getWebsite(): string;
    hashCode(): number;
    isInteractive(): boolean;
}