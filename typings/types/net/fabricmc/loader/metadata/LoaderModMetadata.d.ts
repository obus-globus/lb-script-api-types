import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../net/fabricmc/api/EnvType.d.ts'
import type { ModMetadata } from '../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { EntrypointMetadata } from '../../../../net/fabricmc/loader/metadata/EntrypointMetadata.d.ts'
export interface LoaderModMetadata extends Object, ModMetadata{
    getBreaks(): E[];
    getConflicts(): E[];
    getDepends(): E[];
    getEntrypointKeys(): E[];
    getEntrypoints(arg0: string): EntrypointMetadata[];
    getRecommends(): E[];
    getSuggests(): E[];
    loadsInEnvironment(arg0: EnvType): boolean;
}