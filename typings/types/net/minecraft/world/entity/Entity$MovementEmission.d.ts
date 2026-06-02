import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Entity$MovementEmission extends Enum<Entity$MovementEmission> {
    static ALL: Entity$MovementEmission;
    static EVENTS: Entity$MovementEmission;
    static NONE: Entity$MovementEmission;
    static SOUNDS: Entity$MovementEmission;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Entity$MovementEmission;
    static values(): (Object | null)[];
    private constructor(sounds: boolean, events: boolean)
    // private events: boolean;
    // private sounds: boolean;
    emitsAnything(): boolean;
    emitsEvents(): boolean;
    emitsSounds(): boolean;
    name(): "NONE" | "SOUNDS" | "EVENTS" | "ALL";
}