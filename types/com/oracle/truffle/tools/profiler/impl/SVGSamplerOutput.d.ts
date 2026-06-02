import type { CPUSamplerData } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSamplerData.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SVGSamplerOutput extends Object {
    static allocateColor(paramr: number, paramg: number, paramb: number): string;
    static black(): string;
    static endGroup(paramattributes: { [key: string]: string }): string;
    static endSubDrawing(): string;
    static escape(paramtext: string): string;
    static fillRectangle(paramx1: number, paramy1: number, paramw: number, paramh: number, paramfill: string, paramextras: string, paramattributes: { [key: string]: string }): string;
    static printSamplingFlameGraph(paramout: PrintStream, paramdata: CPUSamplerData[]): void;
    static startGroup(paramattributes: { [key: string]: string }): string;
    static startSubDrawing(paramattributes: { [key: string]: string }): string;
    static ttfString(paramcolor: string, paramfont: string, paramsize: number, paramx: number, paramy: number, paramtext: string, paramloc: string, paramextras: string): string;
    constructor(output: StringBuilder)
    // private output: StringBuilder;
    close(): void;
    header(width: number, height: number): void;
    include(data: string): void;
    toString(): string;
}