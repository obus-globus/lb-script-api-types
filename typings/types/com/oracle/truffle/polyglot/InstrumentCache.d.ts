import type { TruffleInstrument } from '../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrumentProvider } from '../../../../com/oracle/truffle/api/instrumentation/provider/TruffleInstrumentProvider.d.ts'
import type { InternalResourceCache } from '../../../../com/oracle/truffle/polyglot/InternalResourceCache.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export class InstrumentCache extends Object {
    private constructor(id: string, name: string, version: string, className: string, internal: boolean, services: string[], provider: TruffleInstrumentProvider, website: string, sandboxPolicy: SandboxPolicy, internalResources: { [key: string]: InternalResourceCache })
    // private className: string;
    // private id: string;
    // private internal: boolean;
    // private internalResources: { [key: string]: InternalResourceCache };
    // private name: string;
    // private provider: TruffleInstrumentProvider;
    // private sandboxPolicy: SandboxPolicy;
    // private services: string[];
    // private version: string;
    // private website: string;
    getClassName(): string;
    getId(): string;
    getName(): string;
    getResourceCache(resourceId: string): InternalResourceCache;
    getResourceIds(): string[];
    getResources(): InternalResourceCache[];
    getSandboxPolicy(): SandboxPolicy;
    getVersion(): string;
    getWebsite(): string;
    isInternal(): boolean;
    loadInstrument(): TruffleInstrument;
    services(): string[];
    supportsService(clazz: Class<Object>): boolean;
}