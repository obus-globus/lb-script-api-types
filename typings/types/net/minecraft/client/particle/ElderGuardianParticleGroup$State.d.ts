import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ElderGuardianParticleGroup$ElderGuardianParticleRenderState } from '../../../../net/minecraft/client/particle/ElderGuardianParticleGroup$ElderGuardianParticleRenderState.d.ts'
import type { SubmitNodeCollector } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { ParticleGroupRenderState } from '../../../../net/minecraft/client/renderer/state/level/ParticleGroupRenderState.d.ts'
export class ElderGuardianParticleGroup$State extends Record implements ParticleGroupRenderState {
    private constructor(states: ElderGuardianParticleGroup$ElderGuardianParticleRenderState[])
    // private states: ElderGuardianParticleGroup$ElderGuardianParticleRenderState[];
    clear(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    states(): ElderGuardianParticleGroup$ElderGuardianParticleRenderState[];
    submit(submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    toString(): string;
}