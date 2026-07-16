import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CommandOutputType extends Enum<CommandOutputType> {
    static AllOutput: CommandOutputType;
    static DataSet: CommandOutputType;
    static LastOutput: CommandOutputType;
    static None: CommandOutputType;
    static Silent: CommandOutputType;
    static getByName(paramarg0: string): CommandOutputType;
    static getByName(paramarg0: string, paramarg1: CommandOutputType): CommandOutputType;
    static getByValue(paramarg0: number): CommandOutputType;
    static getByValue(paramarg0: number, paramarg1: CommandOutputType): CommandOutputType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CommandOutputType;
    static values(): CommandOutputType[];
    private constructor(arg2: number)
    private constructor(arg2: CommandOutputType)
    readonly value: number;
    getValue(): number;
    name(): "None" | "LastOutput" | "Silent" | "AllOutput" | "DataSet";
}