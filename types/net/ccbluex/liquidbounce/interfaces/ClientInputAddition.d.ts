import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
export interface ClientInputAddition extends Object{
    liquid_bounce$getInitial(): Input;
    liquid_bounce$getUntransformed(): Input;
    liquid_bounce$setMovementInput(arg0: Vec2): void;
}