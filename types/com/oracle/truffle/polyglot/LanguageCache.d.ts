import type { TruffleFile$FileTypeDetector } from '../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$ContextPolicy } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextPolicy.d.ts'
import type { Tag } from '../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { TruffleLanguageProvider } from '../../../../com/oracle/truffle/api/provider/TruffleLanguageProvider.d.ts'
import type { InternalResourceCache } from '../../../../com/oracle/truffle/polyglot/InternalResourceCache.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export class LanguageCache extends Object implements Comparable<LanguageCache> {
    static getNeedsAllEncodings(): boolean;
    private constructor(id: string, name: string, implementationName: string, version: string, className: string, languageHome: string, characterMimeTypes: string[], byteMimeTypes: string[], defaultMimeType: string, dependentLanguages: string[], interactive: boolean, internal: boolean, needsAllEncodings: boolean, services: string[], contextPolicy: TruffleLanguage$ContextPolicy, provider: TruffleLanguageProvider, website: string, sandboxPolicy: SandboxPolicy, internalResources: { [key: string]: InternalResourceCache })
    // private characterMimeTypes: string[];
    // private className: string;
    // private contextPolicy: TruffleLanguage$ContextPolicy;
    // private defaultMimeType: string;
    // private dependentLanguages: string[];
    // private fileTypeDetectors: TruffleFile$FileTypeDetector[];
    // private id: string;
    // private implementationName: string;
    // private interactive: boolean;
    // private internal: boolean;
    // private internalResources: { [key: string]: InternalResourceCache };
    // private languageHome: string;
    // private mimeTypes: string[];
    // private name: string;
    readonly needsAllEncodings: boolean;
    // private providedTags: Class<Tag>[];
    // private provider: TruffleLanguageProvider;
    // private sandboxPolicy: SandboxPolicy;
    // private services: string[];
    // private staticIndex: number;
    // private version: string;
    // private website: string;
    compareTo(o: LanguageCache): number;
    getClassName(): string;
    getDefaultMimeType(): string;
    getDependentLanguages(): string[];
    getFileTypeDetectors(): TruffleFile$FileTypeDetector[];
    getId(): string;
    getImplementationName(): string;
    getLanguageHome(): string;
    getMimeTypes(): string[];
    getName(): string;
    getPolicy(): TruffleLanguage$ContextPolicy;
    getProvidedTags(): Class<Tag>[];
    getResourceCache(resourceId: string): InternalResourceCache;
    getResourceIds(): E[];
    getResources(): E[];
    getSandboxPolicy(): SandboxPolicy;
    getServices(): E[];
    getStaticIndex(): number;
    getVersion(): string;
    getWebsite(): string;
    isCharacterMimeType(mimeType: string): boolean;
    isInteractive(): boolean;
    isInternal(): boolean;
    isNeedsAllEncodings(): boolean;
    loadLanguage(): TruffleLanguage<Object>;
    supportsService(clazz: Class<Object>): boolean;
    toString(): string;
}