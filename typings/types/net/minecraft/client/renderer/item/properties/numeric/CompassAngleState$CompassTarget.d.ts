import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { GlobalPos } from '../../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CompassAngleState$CompassTarget extends Enum<CompassAngleState$CompassTarget> implements StringRepresentable {
    static CODEC: Codec<CompassAngleState$CompassTarget>;
    static LODESTONE: CompassAngleState$CompassTarget;
    static NONE: CompassAngleState$CompassTarget;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RECOVERY: CompassAngleState$CompassTarget;
    static SPAWN: CompassAngleState$CompassTarget;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CompassAngleState$CompassTarget;
    static values(): CompassAngleState$CompassTarget[];
    private constructor(name: string)
    // private name: string;
    get(level: ClientLevel, itemStack: ItemStack, entity: ItemOwner): GlobalPos;
    getSerializedName(): string;
    name(): "NONE" | "LODESTONE" | "SPAWN" | "RECOVERY";
}