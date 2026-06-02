import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SampleStorage } from '../../../../../../net/minecraft/util/debugchart/SampleStorage.d.ts'
export abstract class AbstractDebugChart extends Object {
    constructor(font: Font, sampleStorage: SampleStorage)
    // private font: Font;
    // private sampleStorage: SampleStorage;
    extractAdditionalLinesAndLabels(graphics: GuiGraphicsExtractor, left: number, width: number, bottom: number): void;
    extractAdditionalSampleBars(graphics: GuiGraphicsExtractor, bottom: number, currentX: number, sampleIndex: number): void;
    extractMainSampleBar(graphics: GuiGraphicsExtractor, bottom: number, currentX: number, sampleIndex: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, left: number, width: number): void;
    extractSampleBars(graphics: GuiGraphicsExtractor, bottom: number, currentX: number, sampleIndex: number): void;
    extractStringWithShade(graphics: GuiGraphicsExtractor, str: string, x: number, y: number): void;
    getFullHeight(): number;
    getSampleColor(sample: number, min: number, minColor: number, mid: number, midColor: number, max: number, maxColor: number): number;
    getSampleColor(sample: number): number;
    getSampleHeight(sample: number): number;
    getValueForAggregation(sampleIndex: number): number;
    getWidth(maxWidth: number): number;
    toDisplayString(sample: number): string;
}