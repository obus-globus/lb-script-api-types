import type { Object } from '../../../java/lang/Object.d.ts'
import type { Camera$NearPlane } from '../../../net/minecraft/client/Camera$NearPlane.d.ts'
import type { DeltaTracker } from '../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Projection } from '../../../net/minecraft/client/renderer/Projection.d.ts'
import type { Frustum } from '../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { CameraRenderState } from '../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { EnvironmentAttributeProbe } from '../../../net/minecraft/world/attribute/EnvironmentAttributeProbe.d.ts'
import type { Entity } from '../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../net/minecraft/world/level/Level.d.ts'
import type { FogType } from '../../../net/minecraft/world/level/material/FogType.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
import type { TrackedWaypoint$Camera } from '../../../net/minecraft/world/waypoints/TrackedWaypoint$Camera.d.ts'
import type { Matrix4f } from '../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../org/joml/Matrix4fc.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../org/joml/Vector3fc.d.ts'
export class Camera extends Object implements TrackedWaypoint$Camera {
    static BASE_HUD_FOV: number;
    static PROJECTION_Z_NEAR: number;
    constructor()
    // private attributeProbe: EnvironmentAttributeProbe;
    // private blockPosition: BlockPos$MutableBlockPos;
    // private cachedViewRotMatrix: Matrix4f;
    // private cachedViewRotProjMatrix: Matrix4f;
    // private captureFrustum: boolean;
    readonly capturedFrustum: Frustum;
    readonly cullFrustum: Frustum;
    // private depthFar: number;
    readonly detached: boolean;
    // private eyeHeight: number;
    // private eyeHeightOld: number;
    // private forwards: Vector3f;
    readonly fov: number;
    // private fovModifier: number;
    // private hudFov: number;
    readonly initialized: boolean;
    // private isPanoramicMode: boolean;
    // private lastProjectionVersion: number;
    // private left: Vector3f;
    readonly level: Level;
    // private matrixPropertiesDirty: number;
    // private minecraft: Minecraft;
    // private oldFovModifier: number;
    // private panoramicForwards: Vector3f;
    // private projection: Projection;
    // private rotation: Quaternionf;
    // private up: Vector3f;
    // private xRot: number;
    // private yRot: number;
    // private alignWithEntity(partialTicks: number): void;
    attributeProbe(): EnvironmentAttributeProbe;
    blockPosition(): BlockPos;
    // private calculateFov(partialTicks: number): number;
    // private calculateHudFov(partialTicks: number): number;
    captureFrustum(): void;
    // private createProjectionMatrixForCulling(): Matrix4f;
    disablePanoramicMode(): void;
    enablePanoramicMode(): void;
    entity(): Entity;
    extractRenderState(cameraState: CameraRenderState, cameraEntityPartialTicks: number): void;
    forwardVector(): Vector3fc;
    getCameraEntityPartialTicks(deltaTracker: DeltaTracker): number;
    getCapturedFrustum(): Frustum;
    getCullFrustum(): Frustum;
    getFluidInCamera(): FogType;
    getFov(): number;
    // private getMaxZoom(cameraDist: number): number;
    getNearPlane(fov: number): Camera$NearPlane;
    getViewRotationMatrix(dest: Matrix4f): Matrix4f;
    getViewRotationProjectionMatrix(dest: Matrix4f): Matrix4f;
    isDetached(): boolean;
    isInitialized(): boolean;
    isPanoramicMode(): boolean;
    killFrustum(): void;
    leftVector(): Vector3fc;
    // private modifyFovBasedOnDeathOrFluid(partialTicks: number, fov: number): number;
    move(forwards: number, up: number, right: number): void;
    panoramicForwards(): Vector3fc;
    position(): Vec3;
    // private prepareCullFrustum(modelViewMatrix: Matrix4fc, projectionMatrixForCulling: Matrix4f, cameraPos: Vec3): void;
    reset(): void;
    rotation(): Quaternionf;
    setEntity(entity: Entity): void;
    setLevel(level: ClientLevel): void;
    setPosition(x: number, y: number, z: number): void;
    setPosition(position: Vec3): void;
    setRotation(yRot: number, xRot: number): void;
    // private setupOrtho(zNear: number, zFar: number, width: number, height: number, invertY: boolean): void;
    // private setupPerspective(zNear: number, zFar: number, fov: number, width: number, height: number): void;
    tick(): void;
    // private tickFov(): void;
    upVector(): Vector3fc;
    update(deltaTracker: DeltaTracker): void;
    xRot(): number;
    yRot(): number;
    yaw(): number;
}