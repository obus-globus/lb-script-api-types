import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { QuadParticleRenderState$ParticleConsumer } from '../../../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState$ParticleConsumer.d.ts'
export class QuadParticleRenderState$Storage extends Object {
    private constructor()
    // private capacity: number;
    // private currentParticleIndex: number;
    // private floatValues: number[];
    // private intValues: number[];
    add(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, wRot: number, scale: number, u0: number, u1: number, v0: number, v1: number, color: number, lightCoords: number): void;
    clear(): void;
    count(): number;
    forEachParticle(consumer: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number) => void): void;
    // private grow(): void;
}