import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlurEffectRenderer$BlurKernelUniform extends Object {
    constructor(sigma: number, radius: number)
    readonly radius: number;
    readonly sigma: number;
    component1(): number;
    component2(): number;
    copy(sigma: number, radius: number): BlurEffectRenderer$BlurKernelUniform;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}