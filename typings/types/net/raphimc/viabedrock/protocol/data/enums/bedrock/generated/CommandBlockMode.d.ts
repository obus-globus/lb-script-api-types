import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CommandBlockMode extends Enum<CommandBlockMode> {
    static Chain: CommandBlockMode;
    static Normal: CommandBlockMode;
    static Repeating: CommandBlockMode;
    static getByName(paramarg0: string): CommandBlockMode;
    static getByName(paramarg0: string, paramarg1: CommandBlockMode): CommandBlockMode;
    static getByValue(paramarg0: number): CommandBlockMode;
    static getByValue(paramarg0: number, paramarg1: CommandBlockMode): CommandBlockMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CommandBlockMode;
    static values(): CommandBlockMode[];
    private constructor(arg2: number)
    private constructor(arg2: CommandBlockMode)
    readonly value: number;
    getValue(): number;
    name(): "Normal" | "Repeating" | "Chain";
}