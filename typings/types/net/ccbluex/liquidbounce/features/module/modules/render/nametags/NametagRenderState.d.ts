import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NametagRenderState$Equipments } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState$Equipments.d.ts'
import type { Vec3f } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { ItemStackListRenderer$SingleItemStackRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListRenderer$SingleItemStackRenderer.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class NametagRenderState extends Object {
    constructor()
    entity: Entity | null;
    equipmentStackRenderer: ItemStackListRenderer$SingleItemStackRenderer;
    equipments: NametagRenderState$Equipments;
    scale: number;
    /**
     * Updated on frame.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:51}
     */
    screenPos: Vec3f | null;
    /**
     * The text to render as nametag
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:44}
     */
    text: Component;
    calculateScreenPos(tickDelta: number): Vec3f | null;
    reset(): void;
    update(entity: Entity, scale: number): void;
}