import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { InternalResource$Env } from '../../../../com/oracle/truffle/api/InternalResource$Env.d.ts'
import type { InternalResourceRoots$Root } from '../../../../com/oracle/truffle/polyglot/InternalResourceRoots$Root.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../org/graalvm/collections/Pair.d.ts'
export class InternalResourceCache extends Object {
    static usesInternalResources(): boolean;
    static usesResourceDirectoryOnNativeImage(): boolean;
    constructor(languageId: string, resourceId: string, resourceFactory: () => InternalResource)
    // private aggregatedFileListHash: string;
    // private aggregatedFileListResource: Path;
    // private id: string;
    // private owningRoot: InternalResourceRoots$Root;
    // private path: Path;
    // private requiresEagerUnpack: boolean;
    // private resourceFactory: () => InternalResource;
    // private resourceId: string;
    clearCache(): void;
    // private copyResourcesForNativeImage(target: Path): boolean;
    // private findStandaloneResourceRoot(root: Path): Path;
    getPath(polyglotEngine: PolyglotEngineImpl): Path;
    getPathOrNull(): Path;
    getResourceId(): string;
    // private includeResourcesForNativeImageImpl(tempDir: Path, resourceLocationConsumer: (param0: Module, param1: Pair<string, number[]>) => void): void;
    initializeOwningRoot(root: InternalResourceRoots$Root): void;
    // private installResource(resourceEnvProvider: (param0: InternalResource) => InternalResource$Env): Path;
    // private isMissingOptionalResource(): boolean;
    requiresEagerUnpack(): boolean;
    toString(): string;
}