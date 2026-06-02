import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ProfileResults } from '../../../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
export class ProfilerPieChart extends Object {
    static PIE_CHART_THICKNESS: number;
    static RADIUS: number;
    constructor(font: Font)
    readonly bottomOffset: number;
    // private font: Font;
    // private profilerPieChartResults: ProfileResults;
    // private profilerTreePath: string;
    extractRenderState(graphics: GuiGraphicsExtractor): void;
    profilerPieChartKeyPress(key: number): void;
    setBottomOffset(bottomOffset: number): void;
    setPieChartResults(results: ProfileResults): void;
    // private splitNodeName(nodeName: string, firstLineMaxWidth: number, maxWidth: number): string[];
}