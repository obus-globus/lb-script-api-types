import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { WordPointer } from '../../../org/graalvm/nativeimage/c/type/WordPointer.d.ts'
import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine$Builder } from '../../../org/graalvm/polyglot/Engine$Builder.d.ts'
import type { Instrument } from '../../../org/graalvm/polyglot/Instrument.d.ts'
import type { Language } from '../../../org/graalvm/polyglot/Language.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
import type { AbstractPolyglotImpl$AbstractEngineDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractEngineDispatch.d.ts'
export class Engine extends Object implements AutoCloseable {
    static copyResources(paramtargetFolder: Path[][], paramcomponents: (Object | null)[]): boolean;
    static create(): Engine;
    static create(parampermittedLanguages: (Object | null)[]): Engine;
    static findHome(): Path[][];
    static newBuilder(): Engine$Builder;
    static newBuilder(parampermittedLanguages: (Object | null)[]): Engine$Builder;
    constructor(dispatch: AbstractPolyglotImpl$AbstractEngineDispatch, receiver: Object)
    // private creatorEngine: Engine;
    // private currentAPI: Engine;
    // private dispatch: AbstractPolyglotImpl$AbstractEngineDispatch;
    // private receiver: Object;
    close(): void;
    close(cancelIfExecuting: boolean): void;
    getCachedSources(): Source[];
    getImplementationName(): string;
    getInstruments(): { [key: string]: Instrument };
    getLanguages(): { [key: string]: Language };
    getOptions(): OptionDescriptor[];
    getVersion(): string;
    storeCache(targetFile: Path[]): boolean;
    storeCache(targetFile: Path[], cancelledWord: WordPointer): boolean;
}