import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../net/fabricmc/api/EnvType.d.ts'
import type { ModDependency } from '../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModMetadata } from '../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { EntrypointMetadata } from '../../../../net/fabricmc/loader/metadata/EntrypointMetadata.d.ts'
export interface LoaderModMetadata extends Object, ModMetadata{
    getBreaks(): ModDependency[];
    getConflicts(): ModDependency[];
    getDepends(): ModDependency[];
    getEntrypointKeys(): string[];
    getEntrypoints(arg0: string): EntrypointMetadata[];
    getRecommends(): ModDependency[];
    getSuggests(): ModDependency[];
    loadsInEnvironment(arg0: EnvType): boolean;
}