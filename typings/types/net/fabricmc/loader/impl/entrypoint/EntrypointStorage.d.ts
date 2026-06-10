import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LanguageAdapter } from '../../../../../net/fabricmc/loader/api/LanguageAdapter.d.ts'
import type { EntrypointContainer } from '../../../../../net/fabricmc/loader/api/entrypoint/EntrypointContainer.d.ts'
import type { ModContainerImpl } from '../../../../../net/fabricmc/loader/impl/ModContainerImpl.d.ts'
import type { EntrypointStorage$Entry } from '../../../../../net/fabricmc/loader/impl/entrypoint/EntrypointStorage$Entry.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/EntrypointMetadata.d.ts'
export class EntrypointStorage extends Object {
    constructor()
    // private entryMap: { [key: string]: EntrypointStorage$Entry[] };
    add(arg0: ModContainerImpl, arg1: string, arg2: EntrypointMetadata, arg3: { [key: string]: LanguageAdapter }): void;
    addDeprecated(arg0: ModContainerImpl, arg1: string, arg2: string): void;
    getEntrypointContainers<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): EntrypointContainer<T>[];
    getEntrypoints<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): T[];
    // private getOrCreateEntries(arg0: string): EntrypointStorage$Entry[];
    hasEntrypoints(arg0: string): boolean;
}