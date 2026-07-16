import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PortalMode$Phase extends Enum<PortalMode$Phase> {
    static BUILD: PortalMode$Phase;
    static IGNITE: PortalMode$Phase;
    static getEntries(): PortalMode$Phase[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PortalMode$Phase;
    static values(): PortalMode$Phase[];
    private constructor()
    name(): "BUILD" | "IGNITE";
}