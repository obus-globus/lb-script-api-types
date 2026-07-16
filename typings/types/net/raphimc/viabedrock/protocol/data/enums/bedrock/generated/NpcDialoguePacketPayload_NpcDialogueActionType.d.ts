import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NpcDialoguePacketPayload_NpcDialogueActionType extends Enum<NpcDialoguePacketPayload_NpcDialogueActionType> {
    static Close: NpcDialoguePacketPayload_NpcDialogueActionType;
    static Open: NpcDialoguePacketPayload_NpcDialogueActionType;
    static getByName(paramarg0: string): NpcDialoguePacketPayload_NpcDialogueActionType;
    static getByName(paramarg0: string, paramarg1: NpcDialoguePacketPayload_NpcDialogueActionType): NpcDialoguePacketPayload_NpcDialogueActionType;
    static getByValue(paramarg0: number): NpcDialoguePacketPayload_NpcDialogueActionType;
    static getByValue(paramarg0: number, paramarg1: NpcDialoguePacketPayload_NpcDialogueActionType): NpcDialoguePacketPayload_NpcDialogueActionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NpcDialoguePacketPayload_NpcDialogueActionType;
    static values(): NpcDialoguePacketPayload_NpcDialogueActionType[];
    private constructor(arg2: number)
    private constructor(arg2: NpcDialoguePacketPayload_NpcDialogueActionType)
    readonly value: number;
    getValue(): number;
    name(): "Open" | "Close";
}