import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PacketBound extends Enum<PacketBound> {
    static ADDED_AT_MIN: PacketBound;
    static REMOVED_AT_MAX: PacketBound;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PacketBound;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADDED_AT_MIN" | "REMOVED_AT_MAX";
}