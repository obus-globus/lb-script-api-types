import type { BufferedWriter } from '../../../../../../java/io/BufferedWriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DotExport extends Object {
    static escape(paramstr: string): string;
    static printConnection(paramwriter: BufferedWriter, paramfrom: string, paramto: string, paramlabel: string): void;
    constructor()
}