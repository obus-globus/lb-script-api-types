import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NodeObjectDescriptorKeys extends Object implements TruffleObject {
    constructor(from: JavaMap<string, Object>)
    // private keys: Object[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}