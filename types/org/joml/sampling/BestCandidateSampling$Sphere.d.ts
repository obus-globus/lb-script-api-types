import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Callback3d } from '../../../org/joml/sampling/Callback3d.d.ts'
export class BestCandidateSampling$Sphere extends Object {
    constructor()
    // private numCandidates: number;
    // private numSamples: number;
    // private onHemisphere: boolean;
    // private seed: number;
    generate(arg0: FloatBuffer): BestCandidateSampling$Sphere;
    generate(arg0: number[]): BestCandidateSampling$Sphere;
    generate(arg0: Callback3d): BestCandidateSampling$Sphere;
    numCandidates(arg0: number): BestCandidateSampling$Sphere;
    numSamples(arg0: number): BestCandidateSampling$Sphere;
    onHemisphere(arg0: boolean): BestCandidateSampling$Sphere;
    seed(arg0: number): BestCandidateSampling$Sphere;
}