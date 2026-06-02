import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Particle$LifetimeAlpha extends Record {
    static ALWAYS_OPAQUE: Particle$LifetimeAlpha;
    // private endAlpha: number;
    // private endAtNormalizedAge: number;
    // private startAlpha: number;
    // private startAtNormalizedAge: number;
    currentAlphaForAge(age: number, lifetime: number, partialTickTime: number): number;
    endAlpha(): number;
    endAtNormalizedAge(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isOpaque(): boolean;
    startAlpha(): number;
    startAtNormalizedAge(): number;
    toString(): string;
}