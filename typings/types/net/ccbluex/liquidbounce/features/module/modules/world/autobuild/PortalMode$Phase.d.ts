import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PortalMode$Phase extends Enum<PortalMode$Phase> {
    static BUILD: PortalMode$Phase;
    static IGNITE: PortalMode$Phase;
    static getEntries(): PortalMode$Phase[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): PortalMode$Phase;
    static values(): PortalMode$Phase[];
    private constructor()
    name(): "BUILD" | "IGNITE";
}