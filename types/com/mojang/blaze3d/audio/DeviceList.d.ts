import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceList extends Record {
    static EMPTY: DeviceList;
    static query(): DeviceList;
    constructor(defaultDevice: string, allDevices: string[])
    // private allDevices: string[];
    // private defaultDevice: string;
    allDevices(): string[];
    defaultDevice(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}