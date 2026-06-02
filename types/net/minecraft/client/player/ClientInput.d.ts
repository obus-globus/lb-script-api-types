import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientInputAddition } from '../../../../net/ccbluex/liquidbounce/interfaces/ClientInputAddition.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
export class ClientInput extends Object implements ClientInputAddition {
    constructor()
    // private initial: Input;
    keyPresses: Input;
    moveVector: Vec2;
    // private untransformed: Input;
    getMoveVector(): Vec2;
    hasForwardImpulse(): boolean;
    liquid_bounce$getInitial(): Input;
    liquid_bounce$getUntransformed(): Input;
    liquid_bounce$setMovementInput(arg0: Vec2): void;
    makeJump(): void;
    tick(): void;
}