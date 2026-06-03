import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractDebugChart } from '../../../../../../net/minecraft/client/gui/components/debugchart/AbstractDebugChart.d.ts'
import type { SampleStorage } from '../../../../../../net/minecraft/util/debugchart/SampleStorage.d.ts'
export class FpsDebugChart extends AbstractDebugChart {
    constructor(font: Font, sampleStorage: SampleStorage)
    extractAdditionalLinesAndLabels(graphics: GuiGraphicsExtractor, left: number, width: number, bottom: number): void;
    getSampleColor(sample: number, min: number, minColor: number, mid: number, midColor: number, max: number, maxColor: number): number;
    getSampleColor(nanos: number): number;
    getSampleHeight(nanos: number): number;
    toDisplayString(nanos: number): string;
}