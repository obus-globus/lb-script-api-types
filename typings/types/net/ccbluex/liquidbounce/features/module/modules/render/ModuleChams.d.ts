import type { RenderPipeline } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { ScopedValue } from '../../../../../../../java/lang/ScopedValue.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleChams$ChamsMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ChamsMode.d.ts'
import type { LazyRenderTargetHolder } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.d.ts'
import type { ItemFeatureRenderer$Submit } from '../../../../../../../net/minecraft/client/renderer/feature/ItemFeatureRenderer$Submit.d.ts'
import type { OutputTarget } from '../../../../../../../net/minecraft/client/renderer/rendertype/OutputTarget.d.ts'
import type { RenderType } from '../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleChams extends ClientModule {
    static INSTANCE: ModuleChams;
    // private blitSampler: GpuSampler;
    // private dirty: boolean;
    // private heldItemEntityContext: ScopedValue<Entity>;
    // private heldItemSubmits: ItemFeatureRenderer$Submit[];
    // private modes: ModeValueGroup<ModuleChams$ChamsMode>;
    // private outputTarget: OutputTarget;
    // private pipelineBlit: RenderPipeline;
    // private remapRenderType: (param0: RenderType) => RenderType;
    // private renderTargetHolder: LazyRenderTargetHolder;
    // private supportedRenderTypes: string[];
    /**
     * Ensures the chams target exists before any remapped draws in this frame.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L165 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:165}
     */
    beginFrameIfNeeded(): void;
    /**
     * Blits the accumulated chams target into the main render target.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L174 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:174}
     */
    compositeIfNeeded(target: RenderTarget): void;
    /**
     * Returns whether the submit was created from a held-item context.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L145 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:145}
     */
    isHeldItemSubmit(submit: ItemFeatureRenderer$Submit): boolean;
    /**
     * Marks an item submit as coming from the current held-item context.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:136}
     */
    markHeldItemSubmitIfActive(submit: ItemFeatureRenderer$Submit): void;
    onDisabled(): void;
    /**
     * Remaps an immediate held-item render type using the current scoped entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L159 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:159}
     */
    remapCurrentHeldItemRenderTypeIfNeeded(renderType: RenderType): RenderType;
    /**
     * Remaps a deferred held-item render type to the chams target when applicable.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:149}
     */
    remapHeldItemRenderTypeIfNeeded(submit: ItemFeatureRenderer$Submit, renderType: RenderType): RenderType;
    /**
     * Remaps an entity render type to the chams target when applicable.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:117}
     */
    remapIfNeeded(renderType: RenderType, entity: Entity | null): RenderType;
    // private supports(renderType: RenderType): boolean;
    /**
     * Runs a third-person held-item submission with the current entity bound.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:127}
     */
    withHeldItemContext(entity: Entity | null, block: () => void): void;
}