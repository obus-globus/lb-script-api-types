import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerCommandAction extends Enum<PlayerCommandAction> {
    static OPEN_INVENTORY: PlayerCommandAction;
    static START_FALL_FLYING: PlayerCommandAction;
    static START_RIDING_JUMP: PlayerCommandAction;
    static START_SPRINTING: PlayerCommandAction;
    static STOP_RIDING_JUMP: PlayerCommandAction;
    static STOP_SLEEPING: PlayerCommandAction;
    static STOP_SPRINTING: PlayerCommandAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PlayerCommandAction;
    static values(): PlayerCommandAction[];
    private constructor()
    name(): "STOP_SLEEPING" | "START_SPRINTING" | "STOP_SPRINTING" | "START_RIDING_JUMP" | "STOP_RIDING_JUMP" | "OPEN_INVENTORY" | "START_FALL_FLYING";
}