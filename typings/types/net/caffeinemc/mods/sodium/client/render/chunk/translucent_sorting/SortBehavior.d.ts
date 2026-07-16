import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { DeferMode } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/DeferMode.d.ts'
import type { SortBehavior$PriorityMode } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortBehavior$PriorityMode.d.ts'
import type { SortBehavior$SortMode } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortBehavior$SortMode.d.ts'
export class SortBehavior extends Enum<SortBehavior> {
    static DYNAMIC_DEFER_ALL_ONE_FRAME: SortBehavior;
    static DYNAMIC_DEFER_ALL_ZERO_FRAMES: SortBehavior;
    static DYNAMIC_DEFER_ALWAYS: SortBehavior;
    static DYNAMIC_DEFER_NEARBY_ONE_FRAME: SortBehavior;
    static DYNAMIC_DEFER_NEARBY_ZERO_FRAMES: SortBehavior;
    static OFF: SortBehavior;
    static STATIC: SortBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SortBehavior;
    static values(): SortBehavior[];
    private constructor(arg2: string, arg3: SortBehavior$PriorityMode, arg4: DeferMode)
    private constructor(arg2: string, arg3: SortBehavior$SortMode)
    private constructor(arg2: string, arg3: SortBehavior$SortMode, arg4: SortBehavior$PriorityMode, arg5: DeferMode)
    readonly deferMode: DeferMode;
    readonly priorityMode: SortBehavior$PriorityMode;
    readonly shortName: string;
    readonly sortMode: SortBehavior$SortMode;
    getDeferMode(): DeferMode;
    getPriorityMode(): SortBehavior$PriorityMode;
    getShortName(): string;
    getSortMode(): SortBehavior$SortMode;
    name(): "OFF" | "STATIC" | "DYNAMIC_DEFER_ALWAYS" | "DYNAMIC_DEFER_NEARBY_ONE_FRAME" | "DYNAMIC_DEFER_NEARBY_ZERO_FRAMES" | "DYNAMIC_DEFER_ALL_ONE_FRAME" | "DYNAMIC_DEFER_ALL_ZERO_FRAMES";
}