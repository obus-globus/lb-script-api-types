import type { FilterMode } from '../../../../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleChams$ImageFiltering extends Enum<ModuleChams$ImageFiltering> implements Tagged {
    static Companion: Tagged$Companion;
    static LINEAR: ModuleChams$ImageFiltering;
    static NEAREST: ModuleChams$ImageFiltering;
    static getEntries(): ModuleChams$ImageFiltering[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleChams$ImageFiltering;
    static values(): ModuleChams$ImageFiltering[];
    private constructor(tag: string, filterMode: FilterMode)
    readonly filterMode: FilterMode;
    readonly tag: string;
    sampler(repeat: boolean): GpuSampler;
    name(): "NEAREST" | "LINEAR";
}