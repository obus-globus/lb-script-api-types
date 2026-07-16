import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ResolvedAddressTypes extends Enum<ResolvedAddressTypes> {
    static IPV4_ONLY: ResolvedAddressTypes;
    static IPV4_PREFERRED: ResolvedAddressTypes;
    static IPV6_ONLY: ResolvedAddressTypes;
    static IPV6_PREFERRED: ResolvedAddressTypes;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResolvedAddressTypes;
    static values(): ResolvedAddressTypes[];
    private constructor()
    name(): "IPV4_ONLY" | "IPV6_ONLY" | "IPV4_PREFERRED" | "IPV6_PREFERRED";
}