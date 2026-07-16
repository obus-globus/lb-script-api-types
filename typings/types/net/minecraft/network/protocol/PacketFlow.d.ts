import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PacketFlow extends Enum<PacketFlow> {
    static CLIENTBOUND: PacketFlow;
    static SERVERBOUND: PacketFlow;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PacketFlow;
    static values(): PacketFlow[];
    private constructor(id: string)
    // private id: string;
    getOpposite(): PacketFlow;
    id(): string;
    name(): "SERVERBOUND" | "CLIENTBOUND";
}