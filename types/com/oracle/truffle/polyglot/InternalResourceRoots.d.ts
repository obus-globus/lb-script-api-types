import type { InternalResourceCache } from '../../../../com/oracle/truffle/polyglot/InternalResourceCache.d.ts'
import type { InternalResourceRoots$Root } from '../../../../com/oracle/truffle/polyglot/InternalResourceRoots$Root.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternalResourceRoots extends Object {
    private constructor()
    // private roots: InternalResourceRoots$Root[];
    // private ensureInitialized(): void;
    findInternalResource(hostPath: Path[]): InternalResourceCache;
    findRoot(hostPath: Path[]): InternalResourceRoots$Root;
    patch(engine: PolyglotEngineImpl): boolean;
}