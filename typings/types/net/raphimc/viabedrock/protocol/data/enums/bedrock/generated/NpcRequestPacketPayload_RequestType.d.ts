import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NpcRequestPacketPayload_RequestType extends Enum<NpcRequestPacketPayload_RequestType> {
    static ExecuteAction: NpcRequestPacketPayload_RequestType;
    static ExecuteClosingCommands: NpcRequestPacketPayload_RequestType;
    static ExecuteOpeningCommands: NpcRequestPacketPayload_RequestType;
    static SetActions: NpcRequestPacketPayload_RequestType;
    static SetInteractText: NpcRequestPacketPayload_RequestType;
    static SetName: NpcRequestPacketPayload_RequestType;
    static SetSkin: NpcRequestPacketPayload_RequestType;
    static getByName(paramarg0: string): NpcRequestPacketPayload_RequestType;
    static getByName(paramarg0: string, paramarg1: NpcRequestPacketPayload_RequestType): NpcRequestPacketPayload_RequestType;
    static getByValue(paramarg0: number): NpcRequestPacketPayload_RequestType;
    static getByValue(paramarg0: number, paramarg1: NpcRequestPacketPayload_RequestType): NpcRequestPacketPayload_RequestType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NpcRequestPacketPayload_RequestType;
    static values(): NpcRequestPacketPayload_RequestType[];
    private constructor(arg2: number)
    private constructor(arg2: NpcRequestPacketPayload_RequestType)
    readonly value: number;
    getValue(): number;
    name(): "SetActions" | "ExecuteAction" | "ExecuteClosingCommands" | "SetName" | "SetSkin" | "SetInteractText" | "ExecuteOpeningCommands";
}