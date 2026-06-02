import type { SVGSamplerOutput$GraphOwner } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$GraphOwner.d.ts'
import type { SVGSamplerOutput$SVGComponent } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$SVGComponent.d.ts'
import type { SVGSamplerOutput$SVGFlameGraph$DrawTask } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$SVGFlameGraph$DrawTask.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SVGSamplerOutput$SVGFlameGraph extends Object implements SVGSamplerOutput$SVGComponent {
    constructor(owner: SVGSamplerOutput$GraphOwner)
    // private bottomPadding: number;
    // private maxDepth: number;
    // private owner: SVGSamplerOutput$GraphOwner;
    // private sampleCount: number;
    // private topPadding: number;
    // private widthPerTime: number;
    css(): string;
    drawCanvas(x: number, y: number): string;
    // private drawSample(baseY: number, task: SVGSamplerOutput$SVGFlameGraph$DrawTask, tasks: SVGSamplerOutput$SVGFlameGraph$DrawTask[]): string;
    // private drawSamples(y: number, root: JSONObject): string;
    // private drawTree(): string;
    height(): number;
    initFunction(argName: string): string;
    // private maxDepth(samples: JSONObject): number;
    resetSearchFunction(): string;
    resizeFunction(): string;
    // private sampleWidth(sample: JSONObject): number;
    // private sampleX(sample: JSONObject): number;
    script(): string;
    searchFunction(argName: string): string;
    width(): number;
}