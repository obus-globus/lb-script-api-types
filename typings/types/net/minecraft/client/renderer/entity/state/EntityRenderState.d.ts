import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityRenderStateAddition } from '../../../../../../net/ccbluex/liquidbounce/interfaces/EntityRenderStateAddition.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { CrashReportCategory } from '../../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { EntityRenderState$LeashState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState$LeashState.d.ts'
import type { EntityRenderState$ShadowPiece } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState$ShadowPiece.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityRenderState extends Object implements EntityRenderStateAddition, FabricRenderState {
    static NO_OUTLINE: number;
    constructor()
    ageInTicks: number;
    boundingBoxHeight: number;
    boundingBoxWidth: number;
    displayFireAnimation: boolean;
    distanceToCameraSq: number;
    entityType: EntityType<any>;
    eyeHeight: number;
    isDiscrete: boolean;
    isInvisible: boolean;
    leashStates: EntityRenderState$LeashState[];
    lightCoords: number;
    // private liquid_bounce$entity: Entity;
    // private liquid_bounce$isCustom: boolean;
    nameTag: Component;
    nameTagAttachment: Vec3;
    outlineColor: number;
    passengerOffset: Vec3;
    // private renderStateData: Map<Object | null, Object | null>;
    scoreText: Component;
    shadowPieces: EntityRenderState$ShadowPiece[];
    shadowRadius: number;
    x: number;
    y: number;
    z: number;
    appearsGlowing(): boolean;
    clearExtraData(): void;
    fillCrashReportCategory(category: CrashReportCategory): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    liquid_bounce$getEntity(): Entity;
    liquid_bounce$isCustom(): boolean;
    liquid_bounce$setCustom(arg0: boolean): void;
    liquid_bounce$setEntity(arg0: Entity): void;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}