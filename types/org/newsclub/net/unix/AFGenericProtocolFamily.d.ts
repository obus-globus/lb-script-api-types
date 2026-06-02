import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AFGenericProtocolFamily extends Enum<AFGenericProtocolFamily> implements ProtocolFamily {
    static GENERIC: AFGenericProtocolFamily;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AFGenericProtocolFamily;
    static values(): (Object | null)[];
    private constructor()
    name(): "GENERIC";
}