import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { DecimalFormat } from '../../../../../java/text/DecimalFormat.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShapeProfiler$ShapeStats extends Object {
    constructor(label: string)
    readonly label: string;
    // private oac: number;
    // private oas: number;
    // private objects: number;
    // private ofs: number;
    // private pac: number;
    // private pas: number;
    // private pfs: number;
    add(stats: ShapeProfiler$ShapeStats): void;
    // private avgOAC(format: DecimalFormat): string;
    // private avgOAS(format: DecimalFormat): string;
    // private avgOFS(format: DecimalFormat): string;
    // private avgPAC(format: DecimalFormat): string;
    // private avgPAS(format: DecimalFormat): string;
    // private avgPFS(format: DecimalFormat): string;
    dump(out: PrintWriter): void;
    getLabel(): string;
    profile(shape: Shape): void;
    setLabel(label: string): void;
    toString(): string;
}