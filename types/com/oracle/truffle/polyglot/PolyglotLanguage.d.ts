import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { LanguageCache } from '../../../../com/oracle/truffle/polyglot/LanguageCache.d.ts'
import type { OptionValuesImpl } from '../../../../com/oracle/truffle/polyglot/OptionValuesImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotImpl$VMObject } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl$VMObject.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class PolyglotLanguage extends Object implements PolyglotImpl$VMObject {
    constructor(engine: PolyglotEngineImpl, cache: LanguageCache, engineIndex: number, initError: RuntimeException)
    // private cache: LanguageCache;
    // private contextClass: Class<Object>;
    // private emptySourceOptions: OptionValuesImpl;
    readonly engine: PolyglotEngineImpl;
    // private engineIndex: number;
    // private firstInstance: boolean;
    // private info: LanguageInfo;
    // private initError: RuntimeException;
    // private initLanguage: PolyglotLanguageInstance;
    // private initialized: boolean;
    // private optionValues: OptionValuesImpl;
    readonly options: OptionDescriptor[];
    // private previousContextLocalLocations: PolyglotLocals$LocalLocation[];
    // private previousContextThreadLocalLocations: PolyglotLocals$LocalLocation[];
    readonly sourceOptions: OptionDescriptor[];
    assertCorrectEngine(): boolean;
    clearOptionValues(): void;
    createInstance(sharing: PolyglotSharingLayer): PolyglotLanguageInstance;
    dependsOn(otherLanguage: PolyglotLanguage): boolean;
    // private ensureInitialized(): void;
    // private ensureInitialized(instance: PolyglotLanguageInstance): void;
    getAPIAccess(): AbstractPolyglotImpl$APIAccess;
    getCurrentLanguageContext(): PolyglotLanguageContext;
    getDefaultMimeType(): string;
    getEmptySourceOptionsInternal(): OptionValuesImpl;
    getEngine(): PolyglotEngineImpl;
    getId(): string;
    getImpl(): PolyglotImpl;
    getImplementationName(): string;
    getInitLanguage(): PolyglotLanguageInstance;
    getMimeTypes(): string[];
    getName(): string;
    getOptionValues(): OptionValuesImpl;
    getOptionValuesIfExists(): OptionValuesImpl;
    getOptions(): OptionDescriptor[];
    getOptionsInternal(): OptionDescriptor[];
    getSourceOptions(): OptionDescriptor[];
    getSourceOptionsInternal(): OptionDescriptor[];
    getVersion(): string;
    getWebsite(): string;
    initializeContextClass(contextImpl: Object): void;
    isFirstInstance(): boolean;
    isHost(): boolean;
    isInteractive(): boolean;
    toString(): string;
    validateSandbox(sandboxPolicy: SandboxPolicy): void;
}