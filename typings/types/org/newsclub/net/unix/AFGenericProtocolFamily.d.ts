import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AFGenericProtocolFamily extends Enum<AFGenericProtocolFamily> implements ProtocolFamily {
    static GENERIC: AFGenericProtocolFamily;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AFGenericProtocolFamily;
    static values(): AFGenericProtocolFamily[];
    private constructor()
    name(): string;
    name(): "GENERIC";
}