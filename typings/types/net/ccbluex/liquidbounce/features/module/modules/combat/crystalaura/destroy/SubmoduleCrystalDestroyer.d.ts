import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { CrystalPostAttackTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { SwingMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Chronometer } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { EndCrystal } from '../../../../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
import type { AABB } from '../../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SubmoduleCrystalDestroyer extends ToggleableValueGroup {
    static INSTANCE: SubmoduleCrystalDestroyer;
    readonly chronometer: Chronometer;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    postAttackHandlers: CrystalPostAttackTracker[];
    // private prioritizeVisibleFaces: boolean;
    // private /*not mapped: */ getPrioritizeVisibleFaces(): boolean;
    readonly range: number;
    readonly swingMode: SwingMode;
    readonly wallsRange: number;
    getMaxRange(): number;
    // private queueDestroy(rotation: Rotation, target: EndCrystal, base: AABB, eyePos: Vec3, vec3d: Vec3): void;
    tick(providedCrystal: EndCrystal | null): void;
}