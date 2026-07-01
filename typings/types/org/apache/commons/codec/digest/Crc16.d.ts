import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Crc16$Builder } from '../../../../../org/apache/commons/codec/digest/Crc16$Builder.d.ts'
export class Crc16 extends Object implements Checksum {
    static arc(): Crc16;
    static builder(): Crc16$Builder;
    static ccitt(): Crc16;
    static dnp(): Crc16;
    static getArcTable(): number[];
    static getCcittTable(): number[];
    static getDnpTable(): number[];
    static getIbmSdlcTable(): number[];
    static getMaximTable(): number[];
    static getMcrf4xxTable(): number[];
    static getModbusTable(): number[];
    static getNrsc5Table(): number[];
    static ibmSdlc(): Crc16;
    static maxim(): Crc16;
    static mcrf4xx(): Crc16;
    static modbus(): Crc16;
    static nrsc5(): Crc16;
    static usb(): Crc16;
    constructor(arg0: Crc16$Builder, arg1: any)
    // private crc: number;
    // private init: number;
    // private table: number[];
    // private xorOut: number;
    getValue(): number;
    reset(): void;
    toString(): string;
    update(arg0: ByteBuffer): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    update(arg0: number): void;
}