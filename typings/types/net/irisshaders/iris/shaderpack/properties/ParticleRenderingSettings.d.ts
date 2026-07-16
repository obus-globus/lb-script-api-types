import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ParticleRenderingSettings extends Enum<ParticleRenderingSettings> {
    static AFTER: ParticleRenderingSettings;
    static BEFORE: ParticleRenderingSettings;
    static MIXED: ParticleRenderingSettings;
    static UNSET: ParticleRenderingSettings;
    static fromString(paramarg0: string): ParticleRenderingSettings;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ParticleRenderingSettings;
    static values(): ParticleRenderingSettings[];
    private constructor()
    name(): "UNSET" | "BEFORE" | "MIXED" | "AFTER";
}