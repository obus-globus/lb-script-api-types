import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerPositionModeComponent_PositionMode extends Enum<PlayerPositionModeComponent_PositionMode> {
    static Normal: PlayerPositionModeComponent_PositionMode;
    static OnlyHeadRot: PlayerPositionModeComponent_PositionMode;
    static Respawn: PlayerPositionModeComponent_PositionMode;
    static Teleport: PlayerPositionModeComponent_PositionMode;
    static getByName(paramarg0: string): PlayerPositionModeComponent_PositionMode;
    static getByName(paramarg0: string, paramarg1: PlayerPositionModeComponent_PositionMode): PlayerPositionModeComponent_PositionMode;
    static getByValue(paramarg0: number): PlayerPositionModeComponent_PositionMode;
    static getByValue(paramarg0: number, paramarg1: PlayerPositionModeComponent_PositionMode): PlayerPositionModeComponent_PositionMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerPositionModeComponent_PositionMode;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: PlayerPositionModeComponent_PositionMode)
    readonly value: number;
    getValue(): number;
    name(): "Normal" | "Respawn" | "Teleport" | "OnlyHeadRot";
}