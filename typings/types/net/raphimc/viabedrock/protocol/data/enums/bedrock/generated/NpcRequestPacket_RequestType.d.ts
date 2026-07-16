import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NpcRequestPacket_RequestType extends Enum<NpcRequestPacket_RequestType> {
    static ExecuteAction: NpcRequestPacket_RequestType;
    static ExecuteClosingCommands: NpcRequestPacket_RequestType;
    static ExecuteOpeningCommands: NpcRequestPacket_RequestType;
    static SetActions: NpcRequestPacket_RequestType;
    static SetInteractText: NpcRequestPacket_RequestType;
    static SetName: NpcRequestPacket_RequestType;
    static SetSkin: NpcRequestPacket_RequestType;
    static getByName(paramarg0: string): NpcRequestPacket_RequestType;
    static getByName(paramarg0: string, paramarg1: NpcRequestPacket_RequestType): NpcRequestPacket_RequestType;
    static getByValue(paramarg0: number): NpcRequestPacket_RequestType;
    static getByValue(paramarg0: number, paramarg1: NpcRequestPacket_RequestType): NpcRequestPacket_RequestType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NpcRequestPacket_RequestType;
    static values(): NpcRequestPacket_RequestType[];
    private constructor(arg2: number)
    private constructor(arg2: NpcRequestPacket_RequestType)
    readonly value: number;
    getValue(): number;
    name(): "SetActions" | "ExecuteAction" | "ExecuteClosingCommands" | "SetName" | "SetSkin" | "SetInteractText" | "ExecuteOpeningCommands";
}