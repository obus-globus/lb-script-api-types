import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityAnchorArgument$Anchor extends Enum<EntityAnchorArgument$Anchor> {
    static EYES: EntityAnchorArgument$Anchor;
    static FEET: EntityAnchorArgument$Anchor;
    static getByName(paramname: string): EntityAnchorArgument$Anchor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EntityAnchorArgument$Anchor;
    static values(): (Object | null)[];
    private constructor(name: string, transform: (param0: Vec3, param1: Entity) => Vec3)
    // private name: string;
    // private transform: (param0: Vec3, param1: Entity) => Vec3;
    apply(source: CommandSourceStack): Vec3;
    apply(entity: Entity): Vec3;
    name(): "FEET" | "EYES";
}