import type { IntToLongTypeSystem } from '../../../../../com/oracle/truffle/js/nodes/IntToLongTypeSystem.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntToLongTypeSystemGen extends IntToLongTypeSystem {
    static asImplicitLong(paramstate: number, paramvalue: Object): number;
    static asImplicitLong(paramvalue: Object): number;
    static expectImplicitLong(paramstate: number, paramvalue: Object): number;
    static intToLong(paramvalue: number): number;
    static isImplicitLong(paramstate: number, paramvalue: Object): boolean;
    static isImplicitLong(paramvalue: Object): boolean;
    static specializeImplicitLong(paramvalue: Object): number;
    constructor()
}