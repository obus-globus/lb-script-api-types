import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ControlScheme_Scheme extends Enum<ControlScheme_Scheme> {
    static camera_relative: ControlScheme_Scheme;
    static camera_relative_strafe: ControlScheme_Scheme;
    static locked_player_relative_strafe: ControlScheme_Scheme;
    static player_relative: ControlScheme_Scheme;
    static player_relative_strafe: ControlScheme_Scheme;
    static getByName(paramarg0: string): ControlScheme_Scheme;
    static getByName(paramarg0: string, paramarg1: ControlScheme_Scheme): ControlScheme_Scheme;
    static getByValue(paramarg0: number): ControlScheme_Scheme;
    static getByValue(paramarg0: number, paramarg1: ControlScheme_Scheme): ControlScheme_Scheme;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ControlScheme_Scheme;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ControlScheme_Scheme)
    readonly value: number;
    getValue(): number;
    name(): "locked_player_relative_strafe" | "camera_relative" | "camera_relative_strafe" | "player_relative" | "player_relative_strafe";
}