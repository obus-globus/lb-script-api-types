import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { MapId } from '../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
export interface Item$TooltipContext extends Object{
    isPeaceful(): boolean;
    mapData(id: MapId): MapItemSavedData;
    registries(): HolderLookup$Provider;
    tickRate(): number;
}