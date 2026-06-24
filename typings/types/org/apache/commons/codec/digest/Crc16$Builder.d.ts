import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Crc16 } from '../../../../../org/apache/commons/codec/digest/Crc16.d.ts'
export class Crc16$Builder extends Object implements Supplier<Crc16> {
    constructor()
    // private init: number;
    // private table: number[];
    // private xorOut: number;
    get(): Crc16;
    setInit(arg0: number): Crc16$Builder;
    setTable(arg0: number[]): Crc16$Builder;
    setXorOut(arg0: number): Crc16$Builder;
    // private table(arg0: number[]): Crc16$Builder;
}