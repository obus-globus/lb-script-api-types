import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceFeatures extends Record {
    constructor(shaderDrawParameters: boolean, multiDrawDirectInterleaved: boolean, multiDrawDirectSeparate: boolean, multiDrawIndirect: boolean, drawIndirect: boolean, nonZeroFirstInstance: boolean, persistentMapping: boolean)
    // private drawIndirect: boolean;
    // private multiDrawDirectInterleaved: boolean;
    // private multiDrawDirectSeparate: boolean;
    // private multiDrawIndirect: boolean;
    // private nonZeroFirstInstance: boolean;
    // private persistentMapping: boolean;
    // private shaderDrawParameters: boolean;
    drawIndirect(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    multiDrawDirectInterleaved(): boolean;
    multiDrawDirectSeparate(): boolean;
    multiDrawIndirect(): boolean;
    nonZeroFirstInstance(): boolean;
    persistentMapping(): boolean;
    shaderDrawParameters(): boolean;
    toString(): string;
}