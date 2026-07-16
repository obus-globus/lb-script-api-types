import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CommandPermissionLevel extends Enum<CommandPermissionLevel> {
    static Admin: CommandPermissionLevel;
    static Any: CommandPermissionLevel;
    static GameDirectors: CommandPermissionLevel;
    static Host: CommandPermissionLevel;
    static Internal: CommandPermissionLevel;
    static Owner: CommandPermissionLevel;
    static getByName(paramarg0: string): CommandPermissionLevel;
    static getByName(paramarg0: string, paramarg1: CommandPermissionLevel): CommandPermissionLevel;
    static getByValue(paramarg0: number): CommandPermissionLevel;
    static getByValue(paramarg0: number, paramarg1: CommandPermissionLevel): CommandPermissionLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CommandPermissionLevel;
    static values(): CommandPermissionLevel[];
    private constructor(arg2: number)
    private constructor(arg2: CommandPermissionLevel)
    readonly value: number;
    getValue(): number;
    name(): "Any" | "GameDirectors" | "Admin" | "Host" | "Owner" | "Internal";
}