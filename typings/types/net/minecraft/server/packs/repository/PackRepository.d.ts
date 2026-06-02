import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { RepositorySource } from '../../../../../net/minecraft/server/packs/repository/RepositorySource.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class PackRepository extends Object {
    static displayPackList(parampacks: E[]): string;
    constructor(sources: (param0: (param0: Pack) => void) => void[])
    // private available: { [key: string]: Pack };
    readonly selected: Pack[];
    sources: (param0: (param0: Pack) => void) => void[];
    addPack(packId: string): boolean;
    // private discoverAvailable(): { [key: string]: Pack };
    getAvailableIds(): E[];
    getAvailablePacks(): E[];
    // private getAvailablePacks(ids: E[]): Stream<Pack>;
    getPack(id: string): Pack;
    getRequestedFeatureFlags(): FeatureFlagSet;
    getSelectedIds(): E[];
    getSelectedPacks(): E[];
    isAbleToClearAnyPack(): boolean;
    isAvailable(id: string): boolean;
    openAllSelected(): PackResources[];
    // private rebuildSelected(selectedNames: E[]): Pack[];
    reload(): void;
    removePack(packId: string): boolean;
    setSelected(packs: E[]): void;
}