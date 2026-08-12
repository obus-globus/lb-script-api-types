import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CameraType } from '../../../../../../../net/minecraft/client/CameraType.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * SmoothCamera module
 *
 * Makes your camera move smoother.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSmoothCamera.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSmoothCamera.kt:32}
 */
export class ModuleSmoothCamera extends ClientModule {
    static INSTANCE: ModuleSmoothCamera;
    static cameraUpdate(pos: Vec3): void;
    static shouldApplyChanges(): boolean;
    // private enableFirstPOV: boolean;
    // private /*not mapped: */ getEnableFirstPOV(): boolean;
    // private factorH: number;
    // private /*not mapped: */ getFactorH(): number;
    // private factorV: number;
    // private /*not mapped: */ getFactorV(): number;
    // private lastPerspective: CameraType;
    // private /*not mapped: */ getPerspective(): CameraType;
    // private resetOnPerspectiveChange: boolean;
    // private /*not mapped: */ getResetOnPerspectiveChange(): boolean;
    readonly smoothPos: Vec3;
    cameraUpdate(pos: Vec3): void;
    onDisabled(): void;
    shouldApplyChanges(): boolean;
}