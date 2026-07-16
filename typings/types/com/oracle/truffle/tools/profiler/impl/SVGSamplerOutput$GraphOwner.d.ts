import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { CPUSampler$Payload } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { CPUSamplerData } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSamplerData.d.ts'
import type { ProfilerNode } from '../../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { SVGSamplerOutput } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput.d.ts'
import type { SVGSamplerOutput$GraphColorMap } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$GraphColorMap.d.ts'
import type { SVGSamplerOutput$GraphOwner$SampleKey } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$GraphOwner$SampleKey.d.ts'
import type { SVGSamplerOutput$GraphOwner$Task } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$GraphOwner$Task.d.ts'
import type { SVGSamplerOutput$SVGComponent } from '../../../../../../com/oracle/truffle/tools/profiler/impl/SVGSamplerOutput$SVGComponent.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Random } from '../../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SVGSamplerOutput$GraphOwner extends Object implements SVGSamplerOutput$SVGComponent {
    constructor(output: StringBuilder, data: CPUSamplerData[])
    // private colorsForKeys: Map<SVGSamplerOutput$GraphColorMap, Map<SVGSamplerOutput$GraphOwner$SampleKey, string>>;
    // private components: SVGSamplerOutput$SVGComponent[];
    // private data: CPUSamplerData[];
    keyCounter: number;
    keyHash: Map<SVGSamplerOutput$GraphOwner$SampleKey, number>;
    // private languageColors: Map<SVGSamplerOutput$GraphColorMap, string>;
    nameCounter: number;
    nameHash: { [key: string]: number };
    // private random: Random;
    // private recursiveChildMap: { [key: number]: Map<SVGSamplerOutput$GraphOwner$SampleKey, JSONObject> };
    sampleData: Object[];
    // private sampleId: number;
    sampleJsonKeys: Object[];
    sampleKeys: SVGSamplerOutput$GraphOwner$SampleKey[];
    sampleNames: Object[];
    sourceCounter: number;
    sourceHash: { [key: string]: number };
    sourceNames: Object[];
    // private svg: SVGSamplerOutput;
    abbreviate(fullText: string, width: number): string;
    addComponent(component: SVGSamplerOutput$SVGComponent): void;
    background1(): string;
    background2(): string;
    // private buildColorData(): void;
    // private buildColorDataForSample(sample: JSONObject): void;
    // private buildRecursiveData(): void;
    // private buildSampleData(): void;
    // private calculateRecursiveData(sample: JSONObject): void;
    // private childrenByKeyForSample(sample: JSONObject): Map<SVGSamplerOutput$GraphOwner$SampleKey, JSONObject>;
    // private colorChangeFunction(): string;
    colorForKey(keyId: number, type: SVGSamplerOutput$GraphColorMap): string;
    colorMapForLanguage(sample: ProfilerNode<CPUSampler$Payload>): SVGSamplerOutput$GraphColorMap;
    colorsForType(type: SVGSamplerOutput$GraphColorMap): Map<SVGSamplerOutput$GraphOwner$SampleKey, string>;
    css(): string;
    drawCanvas(x: number, y: number): string;
    fontName(): string;
    fontSize(): number;
    fontWidth(): number;
    generateSVG(): void;
    getResource(name: string): string;
    height(): number;
    // private indexForSampleKey(name: string, section: SourceSection): number;
    // private indexForSampleKey(name: string, sourceFile: string, line: number): number;
    initFunction(argName: string): string;
    initSVG(): void;
    nameForKeyId(keyId: number): string;
    // private processSample(task: SVGSamplerOutput$GraphOwner$Task, tasks: SVGSamplerOutput$GraphOwner$Task[]): void;
    resetSearchFunction(): string;
    resizeFunction(): string;
    sampleDataForId(id: number): JSONObject;
    // private samples(): string;
    script(): string;
    searchColor(): string;
    searchFunction(argName: string): string;
    // private threadSampleData(thread: Thread, samples: ProfilerNode<CPUSampler$Payload>[], tasks: SVGSamplerOutput$GraphOwner$Task[], siblings: Object[], x: number): number;
    width(): number;
}