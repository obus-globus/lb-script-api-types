import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SummonCommand extends Object {
    static createEntity(paramsource: CommandSourceStack, paramtype: Holder$Reference<Object>, parampos: Vec3, paramnbt: CompoundTag, paramfinalize: boolean): Entity;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    constructor()
}