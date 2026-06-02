import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ResolvedAddressTypes extends Enum<ResolvedAddressTypes> {
    static IPV4_ONLY: ResolvedAddressTypes;
    static IPV4_PREFERRED: ResolvedAddressTypes;
    static IPV6_ONLY: ResolvedAddressTypes;
    static IPV6_PREFERRED: ResolvedAddressTypes;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ResolvedAddressTypes;
    static values(): (Object | null)[];
    private constructor()
    name(): "IPV4_ONLY" | "IPV6_ONLY" | "IPV4_PREFERRED" | "IPV6_PREFERRED";
}