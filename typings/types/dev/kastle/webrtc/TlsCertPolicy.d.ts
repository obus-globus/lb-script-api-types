import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TlsCertPolicy extends Enum<TlsCertPolicy> {
    static INSECURE_NO_CHECK: TlsCertPolicy;
    static SECURE: TlsCertPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TlsCertPolicy;
    static values(): TlsCertPolicy[];
    private constructor()
    name(): "SECURE" | "INSECURE_NO_CHECK";
}