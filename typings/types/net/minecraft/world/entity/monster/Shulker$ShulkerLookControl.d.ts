import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookControl } from '../../../../../net/minecraft/world/entity/ai/control/LookControl.d.ts'
import type { Shulker } from '../../../../../net/minecraft/world/entity/monster/Shulker.d.ts'
export class Shulker$ShulkerLookControl extends LookControl {
    constructor(null_: Shulker, mob: Mob)
    clampHeadRotationToBody(): void;
    getXRotD(): Optional<number>;
    getYRotD(): Optional<number>;
}