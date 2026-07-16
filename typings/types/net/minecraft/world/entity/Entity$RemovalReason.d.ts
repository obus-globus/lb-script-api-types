import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Entity$RemovalReason extends Enum<Entity$RemovalReason> {
    static CHANGED_DIMENSION: Entity$RemovalReason;
    static DISCARDED: Entity$RemovalReason;
    static KILLED: Entity$RemovalReason;
    static UNLOADED_TO_CHUNK: Entity$RemovalReason;
    static UNLOADED_WITH_PLAYER: Entity$RemovalReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Entity$RemovalReason;
    static values(): Entity$RemovalReason[];
    private constructor(destroy: boolean, save: boolean)
    // private destroy: boolean;
    // private save: boolean;
    shouldDestroy(): boolean;
    shouldSave(): boolean;
    name(): "KILLED" | "DISCARDED" | "UNLOADED_TO_CHUNK" | "UNLOADED_WITH_PLAYER" | "CHANGED_DIMENSION";
}