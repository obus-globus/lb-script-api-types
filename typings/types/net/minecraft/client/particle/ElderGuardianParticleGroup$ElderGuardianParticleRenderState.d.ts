import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
import type { ElderGuardianParticle } from '../../../../net/minecraft/client/particle/ElderGuardianParticle.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
export class ElderGuardianParticleGroup$ElderGuardianParticleRenderState extends Record {
    static fromParticle(paramparticle: ElderGuardianParticle, paramcamera: Camera, parampartialTickTime: number): ElderGuardianParticleGroup$ElderGuardianParticleRenderState;
    // private color: number;
    // private model: Model<Unit>;
    // private poseStack: PoseStack;
    // private renderType: RenderType;
    color(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): Model<Unit>;
    poseStack(): PoseStack;
    renderType(): RenderType;
    toString(): string;
}