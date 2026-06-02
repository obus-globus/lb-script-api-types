import type { InstrumentInfo } from '../../../../com/oracle/truffle/api/InstrumentInfo.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InstrumentCache } from '../../../../com/oracle/truffle/polyglot/InstrumentCache.d.ts'
import type { OptionValuesImpl } from '../../../../com/oracle/truffle/polyglot/OptionValuesImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotImpl$VMObject } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl$VMObject.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class PolyglotInstrument extends Object implements PolyglotImpl$VMObject {
    constructor(engine: PolyglotEngineImpl, cache: InstrumentCache)
    // private allOptions: OptionDescriptor[];
    // private cache: InstrumentCache;
    // private closed: boolean;
    // private contextLocalLocations: PolyglotLocals$LocalLocation[];
    // private contextOptions: OptionDescriptor[];
    // private contextThreadLocalLocations: PolyglotLocals$LocalLocation[];
    readonly created: boolean;
    // private emptySourceOptionValues: OptionValuesImpl;
    readonly engine: PolyglotEngineImpl;
    // private engineOptions: OptionDescriptor[];
    // private finalized: boolean;
    // private info: InstrumentInfo;
    readonly initialized: boolean;
    // private instrumentLock: Object;
    // private optionValues: OptionValuesImpl;
    readonly readyForContextEvents: boolean;
    // private requestedAsyncStackDepth: number;
    readonly sourceOptions: OptionDescriptor[];
    ensureClosed(): void;
    ensureCreated(): void;
    ensureFinalized(): void;
    // private ensureInitialized(): void;
    getAPIAccess(): AbstractPolyglotImpl$APIAccess;
    getAllOptionsInternal(): OptionDescriptor[];
    getContextOptionsInternal(): OptionDescriptor[];
    getEmptySourceOptionsInternal(): OptionValuesImpl;
    getEngine(): PolyglotEngineImpl;
    getEngineOptionValues(): OptionValuesImpl;
    getEngineOptionsInternal(): OptionDescriptor[];
    getId(): string;
    getImpl(): PolyglotImpl;
    getName(): string;
    getOptionValuesIfExists(): OptionValuesImpl;
    getOptions(): OptionDescriptor[];
    getSourceOptions(): OptionDescriptor[];
    getSourceOptionsInternal(): OptionDescriptor[];
    getVersion(): string;
    getWebsite(): string;
    isCreated(): boolean;
    isInitialized(): boolean;
    isReadyForContextEvents(): boolean;
    lookup<T extends Object | number | string | boolean>(serviceClass: Class<T>): T;
    lookupInternal<T extends Object | number | string | boolean>(serviceClass: Class<T>): T;
    parseSourceOptions(source: Source, componentOnly: string): OptionValuesImpl;
    // private validateSandbox(sandboxPolicy: SandboxPolicy): void;
}