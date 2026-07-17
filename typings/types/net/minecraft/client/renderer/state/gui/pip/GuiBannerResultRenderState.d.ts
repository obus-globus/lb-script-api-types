import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { BannerFlagModel } from '../../../../../../../net/minecraft/client/model/object/banner/BannerFlagModel.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { DyeColor } from '../../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerPatternLayers } from '../../../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
import type { Matrix3x2fc } from '../../../../../../../org/joml/Matrix3x2fc.d.ts'
export class GuiBannerResultRenderState extends Record implements PictureInPictureRenderState {
    static IDENTITY_POSE: Matrix3x2fc;
    constructor(flag: BannerFlagModel, baseColor: DyeColor, resultBannerPatterns: BannerPatternLayers, x0: number, y0: number, x1: number, y1: number, scissorArea: ScreenRectangle)
    constructor(flag: BannerFlagModel, baseColor: DyeColor, resultBannerPatterns: BannerPatternLayers, x0: number, y0: number, x1: number, y1: number, scissorArea: ScreenRectangle, bounds: ScreenRectangle)
    // private baseColor: DyeColor;
    // private bounds: ScreenRectangle;
    // private flag: BannerFlagModel;
    // private resultBannerPatterns: BannerPatternLayers;
    // private scissorArea: ScreenRectangle;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    baseColor(): DyeColor;
    bounds(): ScreenRectangle;
    equals(o: Object | null): boolean;
    flag(): BannerFlagModel;
    hashCode(): number;
    pose(): Matrix3x2fc;
    resultBannerPatterns(): BannerPatternLayers;
    scale(): number;
    scissorArea(): ScreenRectangle;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}