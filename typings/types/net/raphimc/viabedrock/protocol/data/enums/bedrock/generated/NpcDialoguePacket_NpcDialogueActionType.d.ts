import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NpcDialoguePacket_NpcDialogueActionType extends Enum<NpcDialoguePacket_NpcDialogueActionType> {
    static Close: NpcDialoguePacket_NpcDialogueActionType;
    static Open: NpcDialoguePacket_NpcDialogueActionType;
    static getByName(paramarg0: string): NpcDialoguePacket_NpcDialogueActionType;
    static getByName(paramarg0: string, paramarg1: NpcDialoguePacket_NpcDialogueActionType): NpcDialoguePacket_NpcDialogueActionType;
    static getByValue(paramarg0: number): NpcDialoguePacket_NpcDialogueActionType;
    static getByValue(paramarg0: number, paramarg1: NpcDialoguePacket_NpcDialogueActionType): NpcDialoguePacket_NpcDialogueActionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NpcDialoguePacket_NpcDialogueActionType;
    static values(): NpcDialoguePacket_NpcDialogueActionType[];
    private constructor(arg2: number)
    private constructor(arg2: NpcDialoguePacket_NpcDialogueActionType)
    readonly value: number;
    getValue(): number;
    name(): "Open" | "Close";
}