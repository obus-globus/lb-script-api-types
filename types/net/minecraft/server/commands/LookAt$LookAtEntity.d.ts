import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { EntityAnchorArgument$Anchor } from '../../../../net/minecraft/commands/arguments/EntityAnchorArgument$Anchor.d.ts'
import type { LookAt } from '../../../../net/minecraft/server/commands/LookAt.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class LookAt$LookAtEntity extends Record implements LookAt {
    constructor(entity: Entity, anchor: EntityAnchorArgument$Anchor)
    // private anchor: EntityAnchorArgument$Anchor;
    // private entity: Entity;
    anchor(): EntityAnchorArgument$Anchor;
    entity(): Entity;
    equals(o: Object | null): boolean;
    hashCode(): number;
    perform(source: CommandSourceStack, target: Entity): void;
    toString(): string;
}