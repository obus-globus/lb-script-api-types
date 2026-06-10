import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/EntrypointMetadata.d.ts'
import type { NestedJarEntry } from '../../../../../net/fabricmc/loader/impl/metadata/NestedJarEntry.d.ts'
import type { LoaderModMetadata as LoaderModMetadata_2 } from '../../../../../net/fabricmc/loader/metadata/LoaderModMetadata.d.ts'
export interface LoaderModMetadata extends Object, LoaderModMetadata_2{
    emitFormatWarnings(): void;
    getClassTweaker(): string;
    getEntrypointKeys(): string[];
    getEntrypoints(arg0: string): EntrypointMetadata[];
    getJars(): NestedJarEntry[];
    getLanguageAdapterDefinitions(): { [key: string]: string };
    getMixinConfigs(arg0: EnvType): string[];
    getOldInitializers(): string[];
    getOldStyleLanguageAdapter(): string;
    getSchemaVersion(): number;
    loadsInEnvironment(arg0: EnvType): boolean;
    setDependencies(arg0: ModDependency[]): void;
    setVersion(arg0: Version): void;
}