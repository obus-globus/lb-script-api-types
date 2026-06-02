import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { FlagHook } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/FlagHook.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
import type { SearchQuerySession } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchQuerySession.d.ts'
import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class Config extends Object implements ConfigState {
    static UPDATE_ON_APPLY: Identifier;
    static UPDATE_ON_REBUILD: Identifier;
    static onAssetReload(): void;
    static onGameNeedsRestart(): void;
    static onRendererReload(): void;
    static onRendererUpdate(): void;
    static onVideoModeReload(): void;
    constructor(arg0: ModOptions[])
    // private flagHooks: Map<Identifier, E[]>;
    // private globalRebuildDependents: E[];
    readonly modOptions: ModOptions[];
    // private options: Map<Identifier, Option>;
    // private pendingStorageHandlers: () => void[];
    // private searchIndex: SearchIndex;
    // private triggeredHooks: FlagHook[];
    anyOptionChanged(): boolean;
    applyAllOptions(): void;
    applyOption(arg0: Identifier): void;
    // private applyOptionChanges(): void;
    // private checkDependencyCycles(arg0: Option, arg1: Identifier[], arg2: Identifier[]): void;
    // private collectApplyHooks(): void;
    // private collectOptions(): void;
    // private exchangeOption(arg0: Option[], arg1: number, arg2: Option, arg3: Option): void;
    flushStorageHandlers(): void;
    getModOptions(): ModOptions[];
    getOption(arg0: Identifier): Option;
    invalidateDependents(arg0: E[]): void;
    invalidateGlobalRebuildDependents(): void;
    notifyStorageWrite(arg0: () => void): void;
    // private processFlags(arg0: Identifier[]): void;
    readBooleanOption(arg0: Identifier): boolean;
    readBooleanOption(arg0: Identifier, arg1: boolean): boolean;
    readEnumOption<E extends Enum<E>>(arg0: Identifier, arg1: Class<E>): E;
    readEnumOption<E extends Enum<E>>(arg0: Identifier, arg1: Class<E>, arg2: boolean): E;
    readIntOption(arg0: Identifier): number;
    readIntOption(arg0: Identifier, arg1: boolean): number;
    // private registerHook(arg0: FlagHook): void;
    // private registerSearchIndex(): void;
    resetAllOptionsFromBindings(): void;
    startSearchQuery(): SearchQuerySession;
    // private validateDependencies(): void;
}