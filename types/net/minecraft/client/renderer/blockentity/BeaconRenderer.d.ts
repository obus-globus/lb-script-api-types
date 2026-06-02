import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BeaconRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BeaconRenderState.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { BeaconBeamOwner } from '../../../../../net/minecraft/world/level/block/entity/BeaconBeamOwner.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BeaconRenderer<T extends BlockEntity & BeaconBeamOwner> extends Object implements BlockEntityRenderer<T, BeaconRenderState> {
    static BEAM_GLOW_RADIUS: number;
    static BEAM_LOCATION: Identifier;
    static MAX_RENDER_Y: number;
    static SOLID_BEAM_RADIUS: number;
    static extract(paramblockEntity: Object | null, paramstate: BeaconRenderState, parampartialTicks: number, paramcameraPosition: Vec3): void;
    static submitBeaconBeam(paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, parambeamLocation: Identifier, paramscale: number, paramanimationTime: number, parambeamStart: number, paramheight: number, paramcolor: number, paramsolidBeamRadius: number, parambeamGlowRadius: number): void;
    constructor()
    createRenderState(): BeaconRenderState;
    extractRenderState(blockEntity: T, state: BeaconRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState<S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    getViewDistance(): number;
    shouldRender(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRender(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: BeaconRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}