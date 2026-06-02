import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export interface LookAt extends Object{
    perform(source: CommandSourceStack, target: Entity): void;
}