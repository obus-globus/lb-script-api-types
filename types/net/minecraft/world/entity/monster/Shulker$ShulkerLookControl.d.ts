import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookControl } from '../../../../../net/minecraft/world/entity/ai/control/LookControl.d.ts'
export class Shulker$ShulkerLookControl extends LookControl {
    constructor(null_: Shulker$ShulkerLookControl, mob: Mob)
    clampHeadRotationToBody(): void;
    getXRotD(): Optional<number>;
    getYRotD(): Optional<number>;
}