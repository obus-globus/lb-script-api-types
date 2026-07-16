import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerPermissionLevel extends Enum<PlayerPermissionLevel> {
    static Custom: PlayerPermissionLevel;
    static Member: PlayerPermissionLevel;
    static Operator: PlayerPermissionLevel;
    static Visitor: PlayerPermissionLevel;
    static getByName(paramarg0: string): PlayerPermissionLevel;
    static getByName(paramarg0: string, paramarg1: PlayerPermissionLevel): PlayerPermissionLevel;
    static getByValue(paramarg0: number): PlayerPermissionLevel;
    static getByValue(paramarg0: number, paramarg1: PlayerPermissionLevel): PlayerPermissionLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PlayerPermissionLevel;
    static values(): PlayerPermissionLevel[];
    private constructor(arg2: number)
    private constructor(arg2: PlayerPermissionLevel)
    readonly value: number;
    getValue(): number;
    name(): "Visitor" | "Member" | "Operator" | "Custom";
}