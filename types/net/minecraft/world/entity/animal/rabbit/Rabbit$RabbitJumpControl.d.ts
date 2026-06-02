import type { JumpControl } from '../../../../../../net/minecraft/world/entity/ai/control/JumpControl.d.ts'
import type { Rabbit } from '../../../../../../net/minecraft/world/entity/animal/rabbit/Rabbit.d.ts'
export class Rabbit$RabbitJumpControl extends JumpControl {
    constructor(rabbit: Rabbit)
    readonly canJump: boolean;
    // private rabbit: Rabbit;
    canJump(): boolean;
    setCanJump(canJump: boolean): void;
    tick(): void;
    wantJump(): boolean;
}