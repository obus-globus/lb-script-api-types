import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PermissionContext$Type extends Enum<PermissionContext$Type> {
    static ENTITY: PermissionContext$Type;
    static OTHER: PermissionContext$Type;
    static PLAYER: PermissionContext$Type;
    static SYSTEM: PermissionContext$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PermissionContext$Type;
    static values(): PermissionContext$Type[];
    private constructor()
    name(): "PLAYER" | "ENTITY" | "SYSTEM" | "OTHER";
}