import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CommandOriginType extends Enum<CommandOriginType> {
    static AutomationPlayer: CommandOriginType;
    static ClientAutomation: CommandOriginType;
    static CommandBlock: CommandOriginType;
    static DedicatedServer: CommandOriginType;
    static DevConsole: CommandOriginType;
    static Entity: CommandOriginType;
    static EntityServer: CommandOriginType;
    static ExecuteContext: CommandOriginType;
    static GameArgument: CommandOriginType;
    static GameDirectorEntityServer: CommandOriginType;
    static MinecartCommandBlock: CommandOriginType;
    static Player: CommandOriginType;
    static Precompiled: CommandOriginType;
    static Scripting: CommandOriginType;
    static Test: CommandOriginType;
    static Virtual: CommandOriginType;
    static getByName(paramarg0: string): CommandOriginType;
    static getByName(paramarg0: string, paramarg1: CommandOriginType): CommandOriginType;
    static getByValue(paramarg0: number): CommandOriginType;
    static getByValue(paramarg0: number, paramarg1: CommandOriginType): CommandOriginType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CommandOriginType;
    static values(): CommandOriginType[];
    private constructor(arg2: number)
    private constructor(arg2: CommandOriginType)
    readonly value: number;
    getValue(): number;
    name(): "Player" | "CommandBlock" | "MinecartCommandBlock" | "DevConsole" | "Test" | "AutomationPlayer" | "ClientAutomation" | "DedicatedServer" | "Entity" | "Virtual" | "GameArgument" | "EntityServer" | "Precompiled" | "GameDirectorEntityServer" | "Scripting" | "ExecuteContext";
}