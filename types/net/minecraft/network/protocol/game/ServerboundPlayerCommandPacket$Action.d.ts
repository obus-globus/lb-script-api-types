import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundPlayerCommandPacket$Action extends Enum<ServerboundPlayerCommandPacket$Action> {
    static OPEN_INVENTORY: ServerboundPlayerCommandPacket$Action;
    static START_FALL_FLYING: ServerboundPlayerCommandPacket$Action;
    static START_RIDING_JUMP: ServerboundPlayerCommandPacket$Action;
    static START_SPRINTING: ServerboundPlayerCommandPacket$Action;
    static STOP_RIDING_JUMP: ServerboundPlayerCommandPacket$Action;
    static STOP_SLEEPING: ServerboundPlayerCommandPacket$Action;
    static STOP_SPRINTING: ServerboundPlayerCommandPacket$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerboundPlayerCommandPacket$Action;
    static values(): (Object | null)[];
    private constructor()
    name(): "STOP_SLEEPING" | "START_SPRINTING" | "STOP_SPRINTING" | "START_RIDING_JUMP" | "STOP_RIDING_JUMP" | "OPEN_INVENTORY" | "START_FALL_FLYING";
}