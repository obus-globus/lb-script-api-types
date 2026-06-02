import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractDebugChart } from '../../../../../../net/minecraft/client/gui/components/debugchart/AbstractDebugChart.d.ts'
import type { SampleStorage } from '../../../../../../net/minecraft/util/debugchart/SampleStorage.d.ts'
export class TpsDebugChart extends AbstractDebugChart {
    constructor(font: Font, sampleStorage: SampleStorage, msptSupplier: () => number)
    // private msptSupplier: () => number;
    extractAdditionalLinesAndLabels(graphics: GuiGraphicsExtractor, left: number, width: number, bottom: number): void;
    extractAdditionalSampleBars(graphics: GuiGraphicsExtractor, bottom: number, currentX: number, sampleIndex: number): void;
    getSampleColor(nanos: number): number;
    getSampleHeight(nanos: number): number;
    getValueForAggregation(sampleIndex: number): number;
    toDisplayString(nanos: number): string;
}