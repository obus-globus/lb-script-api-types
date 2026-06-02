import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractDebugChart } from '../../../../../../net/minecraft/client/gui/components/debugchart/AbstractDebugChart.d.ts'
import type { SampleStorage } from '../../../../../../net/minecraft/util/debugchart/SampleStorage.d.ts'
export class BandwidthDebugChart extends AbstractDebugChart {
    constructor(font: Font, sampleStorage: SampleStorage)
    extractAdditionalLinesAndLabels(graphics: GuiGraphicsExtractor, left: number, width: number, bottom: number): void;
    // private extractLabeledLineAtValue(graphics: GuiGraphicsExtractor, left: number, width: number, bottom: number, bytesPerSecond: number): void;
    // private extractLineWithLabel(graphics: GuiGraphicsExtractor, x: number, width: number, y: number, label: string): void;
    getSampleColor(bytesPerTick: number): number;
    getSampleHeight(bytesPerTick: number): number;
    toDisplayString(bytesPerTick: number): string;
}