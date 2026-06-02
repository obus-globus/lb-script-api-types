import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3d } from '../../../../org/joml/Vector3d.d.ts'
export class CapturedRenderingState extends Object {
    static INSTANCE: CapturedRenderingState;
    private constructor()
    readonly cloudTime: number;
    readonly currentAlphaTest: number;
    readonly currentRenderedBlockEntity: number;
    readonly currentRenderedEntity: number;
    readonly currentRenderedItem: number;
    readonly darknessLightFactor: number;
    readonly fogColor: Vector3d;
    readonly fogDensity: number;
    readonly gbufferModelView: Matrix4fc;
    readonly gbufferProjection: Matrix4fc;
    readonly realTickDelta: number;
    readonly textureReloadCount: number;
    readonly tickDelta: number;
    getCloudTime(): number;
    getCurrentAlphaTest(): number;
    getCurrentRenderedBlockEntity(): number;
    getCurrentRenderedEntity(): number;
    getCurrentRenderedItem(): number;
    getDarknessLightFactor(): number;
    getFogColor(): Vector3d;
    getFogDensity(): number;
    getGbufferModelView(): Matrix4fc;
    getGbufferProjection(): Matrix4fc;
    getRealTickDelta(): number;
    getTextureReloadCount(): number;
    getTickDelta(): number;
    incrementTextureReloadCount(): void;
    resetTextureReloadCount(): void;
    setCloudTime(arg0: number): void;
    setCurrentAlphaTest(arg0: number): void;
    setCurrentBlockEntity(arg0: number): void;
    setCurrentEntity(arg0: number): void;
    setCurrentRenderedItem(arg0: number): void;
    setDarknessLightFactor(arg0: number): void;
    setFogColor(arg0: number, arg1: number, arg2: number): void;
    setFogDensity(arg0: number): void;
    setGbufferModelView(arg0: Matrix4fc): void;
    setGbufferProjection(arg0: Matrix4f): void;
    setRealTickDelta(arg0: number): void;
    setTickDelta(arg0: number): void;
}