import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ControlScheme_Scheme extends Enum<ControlScheme_Scheme> {
    static Camera_relative: ControlScheme_Scheme;
    static Camera_relative_strafe: ControlScheme_Scheme;
    static Locked_player_relative_strafe: ControlScheme_Scheme;
    static Player_relative: ControlScheme_Scheme;
    static Player_relative_strafe: ControlScheme_Scheme;
    static getByName(paramarg0: string): ControlScheme_Scheme;
    static getByName(paramarg0: string, paramarg1: ControlScheme_Scheme): ControlScheme_Scheme;
    static getByValue(paramarg0: number): ControlScheme_Scheme;
    static getByValue(paramarg0: number, paramarg1: ControlScheme_Scheme): ControlScheme_Scheme;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ControlScheme_Scheme;
    static values(): ControlScheme_Scheme[];
    private constructor(arg2: number)
    private constructor(arg2: ControlScheme_Scheme)
    readonly value: number;
    getValue(): number;
    name(): "Locked_player_relative_strafe" | "Camera_relative" | "Camera_relative_strafe" | "Player_relative" | "Player_relative_strafe";
}