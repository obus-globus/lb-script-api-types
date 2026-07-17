import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionalBoolean } from '../../../../../net/irisshaders/iris/helpers/OptionalBoolean.d.ts'
import type { DirectiveHolder } from '../../../../../net/irisshaders/iris/shaderpack/parsing/DirectiveHolder.d.ts'
import type { PackShadowDirectives$DepthSamplingSettings } from '../../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives$DepthSamplingSettings.d.ts'
import type { ShaderProperties } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
import type { ShadowCullState } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShadowCullState.d.ts'
export class PackShadowDirectives extends Object {
    static MAX_SHADOW_COLOR_BUFFERS_IRIS: number;
    static MAX_SHADOW_COLOR_BUFFERS_OF: number;
    constructor(arg0: PackShadowDirectives)
    constructor(arg0: ShaderProperties)
    readonly colorSamplingSettings: JavaMap<any, any>;
    readonly cullingState: ShadowCullState;
    readonly depthSamplingSettings: PackShadowDirectives$DepthSamplingSettings[];
    // private dhShadowEnabled: OptionalBoolean;
    readonly distance: number;
    readonly distanceRenderMul: number;
    readonly entityShadowDistanceMul: number;
    // private explicitRenderDistance: boolean;
    readonly farPlane: number;
    readonly fov: number;
    readonly intervalSize: number;
    readonly nearPlane: number;
    readonly resolution: number;
    // private shadowEnabled: OptionalBoolean;
    // private shouldRenderBlockEntities: boolean;
    // private shouldRenderEntities: boolean;
    // private shouldRenderLightBlockEntities: boolean;
    // private shouldRenderPlayer: boolean;
    // private shouldRenderTerrain: boolean;
    // private shouldRenderTranslucent: boolean;
    readonly voxelDistance: number;
    // private acceptBufferDirectives(arg0: DirectiveHolder, arg1: JavaMap<any, any>): void;
    acceptDirectives(arg0: DirectiveHolder): void;
    getColorSamplingSettings(): JavaMap<any, any>;
    getCullingState(): ShadowCullState;
    getDepthSamplingSettings(): PackShadowDirectives$DepthSamplingSettings[];
    getDistance(): number;
    getDistanceRenderMul(): number;
    getEntityShadowDistanceMul(): number;
    getFarPlane(): number;
    getFov(): number;
    getIntervalSize(): number;
    getNearPlane(): number;
    getResolution(): number;
    getVoxelDistance(): number;
    isDhShadowEnabled(): OptionalBoolean;
    isDistanceRenderMulExplicit(): boolean;
    isShadowEnabled(): OptionalBoolean;
    shouldRenderBlockEntities(): boolean;
    shouldRenderEntities(): boolean;
    shouldRenderLightBlockEntities(): boolean;
    shouldRenderPlayer(): boolean;
    shouldRenderTerrain(): boolean;
    shouldRenderTranslucent(): boolean;
    toString(): string;
}