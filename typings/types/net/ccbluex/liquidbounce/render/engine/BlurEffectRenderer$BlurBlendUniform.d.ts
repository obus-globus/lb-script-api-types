import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlurEffectRenderer$BlurBlendUniform extends Object {
    constructor(minAlpha: number, maxAlpha: number)
    readonly maxAlpha: number;
    readonly minAlpha: number;
    component1(): number;
    component2(): number;
    copy(minAlpha: number, maxAlpha: number): BlurEffectRenderer$BlurBlendUniform;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}