import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShapeProfiler extends Object {
    static getInstance(): ShapeProfiler;
    constructor()
    // private queue: DynamicObject[];
    dump(out: PrintWriter): void;
    dump(out: PrintWriter, topResults: number): void;
    track(obj: DynamicObject): void;
}