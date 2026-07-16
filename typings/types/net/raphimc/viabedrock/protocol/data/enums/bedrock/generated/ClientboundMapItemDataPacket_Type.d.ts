import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClientboundMapItemDataPacket_Type extends Enum<ClientboundMapItemDataPacket_Type> {
    static Creation: ClientboundMapItemDataPacket_Type;
    static DecorationUpdate: ClientboundMapItemDataPacket_Type;
    static Invalid: ClientboundMapItemDataPacket_Type;
    static TextureUpdate: ClientboundMapItemDataPacket_Type;
    static getByName(paramarg0: string): ClientboundMapItemDataPacket_Type;
    static getByName(paramarg0: string, paramarg1: ClientboundMapItemDataPacket_Type): ClientboundMapItemDataPacket_Type;
    static getByValue(paramarg0: number): ClientboundMapItemDataPacket_Type;
    static getByValue(paramarg0: number, paramarg1: ClientboundMapItemDataPacket_Type): ClientboundMapItemDataPacket_Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClientboundMapItemDataPacket_Type;
    static values(): ClientboundMapItemDataPacket_Type[];
    private constructor(arg2: number)
    private constructor(arg2: ClientboundMapItemDataPacket_Type)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "TextureUpdate" | "DecorationUpdate" | "Creation";
}