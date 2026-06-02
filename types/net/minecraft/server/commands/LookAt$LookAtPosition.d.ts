import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { LookAt } from '../../../../net/minecraft/server/commands/LookAt.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LookAt$LookAtPosition extends Record implements LookAt {
    constructor(position: Vec3)
    // private position: Vec3;
    equals(o: Object | null): boolean;
    hashCode(): number;
    perform(source: CommandSourceStack, target: Entity): void;
    position(): Vec3;
    toString(): string;
}