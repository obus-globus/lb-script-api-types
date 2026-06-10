import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
import type { DebugBeeInfo } from '../../../../net/minecraft/util/debug/DebugBeeInfo.d.ts'
import type { DebugBrainDump } from '../../../../net/minecraft/util/debug/DebugBrainDump.d.ts'
import type { DebugBreezeInfo } from '../../../../net/minecraft/util/debug/DebugBreezeInfo.d.ts'
import type { DebugEntityBlockIntersection } from '../../../../net/minecraft/util/debug/DebugEntityBlockIntersection.d.ts'
import type { DebugGameEventInfo } from '../../../../net/minecraft/util/debug/DebugGameEventInfo.d.ts'
import type { DebugGameEventListenerInfo } from '../../../../net/minecraft/util/debug/DebugGameEventListenerInfo.d.ts'
import type { DebugGoalInfo } from '../../../../net/minecraft/util/debug/DebugGoalInfo.d.ts'
import type { DebugHiveInfo } from '../../../../net/minecraft/util/debug/DebugHiveInfo.d.ts'
import type { DebugPathInfo } from '../../../../net/minecraft/util/debug/DebugPathInfo.d.ts'
import type { DebugPoiInfo } from '../../../../net/minecraft/util/debug/DebugPoiInfo.d.ts'
import type { DebugStructureInfo } from '../../../../net/minecraft/util/debug/DebugStructureInfo.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { Orientation } from '../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export class DebugSubscriptions<T extends Object | number | string | boolean> extends Object {
    static BEES: DebugSubscription<DebugBeeInfo>;
    static BEE_HIVES: DebugSubscription<DebugHiveInfo>;
    static BRAINS: DebugSubscription<DebugBrainDump>;
    static BREEZES: DebugSubscription<DebugBreezeInfo>;
    static DEDICATED_SERVER_TICK_TIME: DebugSubscription<Object>;
    static ENTITY_BLOCK_INTERSECTIONS: DebugSubscription<DebugEntityBlockIntersection>;
    static ENTITY_PATHS: DebugSubscription<DebugPathInfo>;
    static GAME_EVENTS: DebugSubscription<DebugGameEventInfo>;
    static GAME_EVENT_LISTENERS: DebugSubscription<DebugGameEventListenerInfo>;
    static GOAL_SELECTORS: DebugSubscription<DebugGoalInfo>;
    static NEIGHBOR_UPDATES: DebugSubscription<BlockPos>;
    static POIS: DebugSubscription<DebugPoiInfo>;
    static RAIDS: DebugSubscription<BlockPos[]>;
    static REDSTONE_WIRE_ORIENTATIONS: DebugSubscription<Orientation>;
    static STRUCTURES: DebugSubscription<DebugStructureInfo[]>;
    static VILLAGE_SECTIONS: DebugSubscription<Unit>;
    static bootstrap(paramregistry: DebugSubscription<Object>[]): DebugSubscription<Object>;
    constructor()
}