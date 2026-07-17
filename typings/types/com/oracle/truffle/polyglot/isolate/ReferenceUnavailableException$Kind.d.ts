import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ReferenceUnavailableException$Kind extends Enum<ReferenceUnavailableException$Kind> {
    static GUEST: ReferenceUnavailableException$Kind;
    static HOST: ReferenceUnavailableException$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ReferenceUnavailableException$Kind;
    static values(): ReferenceUnavailableException$Kind[];
    private constructor(displayName: string)
    // private displayName: string;
    getDisplayName(): string;
    name(): "GUEST" | "HOST";
}