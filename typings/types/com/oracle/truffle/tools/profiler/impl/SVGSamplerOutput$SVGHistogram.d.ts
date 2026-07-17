import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { SVGSamplerOutput$GraphOwner } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$GraphOwner.d.ts'
import type { SVGSamplerOutput$GraphOwner$SampleKey } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$GraphOwner$SampleKey.d.ts'
import type { SVGSamplerOutput$SVGComponent } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$SVGComponent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SVGSamplerOutput$SVGHistogram extends Object implements SVGSamplerOutput$SVGComponent {
    constructor(owner: SVGSamplerOutput$GraphOwner)
    // private bottomPadding: number;
    // private histogram: JSONObject[];
    // private owner: SVGSamplerOutput$GraphOwner;
    // private sampleCount: number;
    // private timeMax: number;
    // private titlePadding: number;
    // private widthPerTime: number;
    // private buildHistogram(sample: JSONObject): JSONObject[];
    // private buildHistogram(sample: JSONObject, samples: JSONObject[], bars: JavaMap<SVGSamplerOutput$GraphOwner$SampleKey, JSONObject>): void;
    css(): string;
    drawCanvas(x: number, y: number): string;
    // private drawElement(bar: JSONObject, position: number): string;
    height(): number;
    initFunction(argName: string): string;
    resetSearchFunction(): string;
    resizeFunction(): string;
    script(): string;
    searchFunction(argName: string): string;
    width(): number;
}