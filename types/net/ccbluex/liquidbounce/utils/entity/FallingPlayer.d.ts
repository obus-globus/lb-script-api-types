import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FallingPlayer$CollisionResult } from '../../../../../net/ccbluex/liquidbounce/utils/entity/FallingPlayer$CollisionResult.d.ts'
import type { FallingPlayer$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/entity/FallingPlayer$Companion.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class FallingPlayer extends Object {
    static Companion: FallingPlayer$Companion;
    static fromPlayer(paramarg0: LocalPlayer): FallingPlayer;
    constructor(player: LocalPlayer, x: number, y: number, z: number, motionX: number, motionY: number, motionZ: number, yRot: number)
    // private motionX: number;
    // private motionY: number;
    // private motionZ: number;
    // private player: LocalPlayer;
    // private simulatedTicks: number;
    x: number;
    y: number;
    // private yRot: number;
    z: number;
    // private calculateForTick(rotationVec: Vec3): void;
    findCollision(ticks: number): FallingPlayer$CollisionResult | null;
    // private hasStatusEffect(effect: Holder<MobEffect>): boolean;
}