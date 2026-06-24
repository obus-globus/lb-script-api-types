import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderTypes extends Object {
    static LINES: RenderType;
    static LINES_TRANSLUCENT: RenderType;
    static SECONDARY_BLOCK_OUTLINE: RenderType;
    static armorCutoutNoCull(paramtexture: Identifier): RenderType;
    static armorEntityGlint(): RenderType;
    static armorTranslucent(paramtexture: Identifier): RenderType;
    static bannerPattern(paramtexture: Identifier): RenderType;
    static beaconBeam(paramtexture: Identifier, paramtranslucent: boolean): RenderType;
    static blockScreenEffect(paramtexture: Identifier): RenderType;
    static breezeEyes(paramtexture: Identifier): RenderType;
    static breezeWind(paramtexture: Identifier, paramuOffset: number, paramvOffset: number): RenderType;
    static createArmorDecalCutoutNoCull(paramtexture: Identifier): RenderType;
    static crumbling(paramtexture: Identifier): RenderType;
    static cutoutMovingBlock(): RenderType;
    static debugFilledBox(): RenderType;
    static debugPoint(): RenderType;
    static debugQuads(): RenderType;
    static debugTriangleFan(): RenderType;
    static dragonRays(): RenderType;
    static endCrystalBeam(paramtexture: Identifier): RenderType;
    static endGateway(): RenderType;
    static endPortal(): RenderType;
    static energySwirl(paramtexture: Identifier, paramuOffset: number, paramvOffset: number): RenderType;
    static entityCutout(paramtexture: Identifier): RenderType;
    static entityCutout(paramtexture: Identifier, paramaffectsOutline: boolean): RenderType;
    static entityCutoutCull(paramtexture: Identifier): RenderType;
    static entityCutoutDissolve(paramtexture: Identifier, parammaskTexture: Identifier): RenderType;
    static entityCutoutZOffset(paramtexture: Identifier): RenderType;
    static entityCutoutZOffset(paramtexture: Identifier, paramaffectsOutline: boolean): RenderType;
    static entityGlint(): RenderType;
    static entityShadow(paramtexture: Identifier): RenderType;
    static entitySolid(paramtexture: Identifier): RenderType;
    static entitySolidZOffsetForward(paramtexture: Identifier): RenderType;
    static entityTranslucent(paramtexture: Identifier): RenderType;
    static entityTranslucent(paramtexture: Identifier, paramaffectsOutline: boolean): RenderType;
    static entityTranslucentCullItemTarget(paramtexture: Identifier): RenderType;
    static entityTranslucentEmissive(paramtexture: Identifier): RenderType;
    static entityTranslucentEmissive(paramtexture: Identifier, paramaffectsOutline: boolean): RenderType;
    static eyes(paramtexture: Identifier): RenderType;
    static fireScreenEffect(paramtexture: Identifier): RenderType;
    static glint(): RenderType;
    static glintTranslucent(): RenderType;
    static itemCutout(paramtexture: Identifier): RenderType;
    static itemTranslucent(paramtexture: Identifier): RenderType;
    static leash(): RenderType;
    static lightning(): RenderType;
    static lines(): RenderType;
    static linesTranslucent(): RenderType;
    static outline(paramtexture: Identifier): RenderType;
    static secondaryBlockOutline(): RenderType;
    static solidMovingBlock(): RenderType;
    static text(paramtexture: Identifier): RenderType;
    static textBackground(): RenderType;
    static textBackgroundSeeThrough(): RenderType;
    static textGrayscale(paramtexture: Identifier): RenderType;
    static textGrayscalePolygonOffset(paramtexture: Identifier): RenderType;
    static textGrayscaleSeeThrough(paramtexture: Identifier): RenderType;
    static textPolygonOffset(paramtexture: Identifier): RenderType;
    static textSeeThrough(paramtexture: Identifier): RenderType;
    static translucentMovingBlock(): RenderType;
    static waterMask(): RenderType;
    constructor()
}