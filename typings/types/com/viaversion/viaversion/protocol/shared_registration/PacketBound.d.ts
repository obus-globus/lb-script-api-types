import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PacketBound extends Enum<PacketBound> {
    static ADDED_AT_MIN: PacketBound;
    static REMOVED_AT_MAX: PacketBound;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PacketBound;
    static values(): PacketBound[];
    private constructor()
    name(): "ADDED_AT_MIN" | "REMOVED_AT_MAX";
}