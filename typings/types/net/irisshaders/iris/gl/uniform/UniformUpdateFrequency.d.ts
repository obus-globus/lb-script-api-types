import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UniformUpdateFrequency extends Enum<UniformUpdateFrequency> {
    static CUSTOM: UniformUpdateFrequency;
    static ONCE: UniformUpdateFrequency;
    static PER_FRAME: UniformUpdateFrequency;
    static PER_TICK: UniformUpdateFrequency;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UniformUpdateFrequency;
    static values(): UniformUpdateFrequency[];
    private constructor()
    name(): "ONCE" | "PER_TICK" | "PER_FRAME" | "CUSTOM";
}