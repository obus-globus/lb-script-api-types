import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractTruffleString$NativePointer extends Object {
    constructor(pointerObject: Object, pointer: number)
    // private byteArrayIsValid: boolean;
    // private bytes: number[];
    // private pointer: number;
    // private pointerObject: Object;
    copy(): AbstractTruffleString$NativePointer;
    getPointerObject(): Object;
    invalidateCachedByteArray(): void;
    materializeByteArray(a: AbstractTruffleString): number[];
    materializeByteArray(byteOffset: number, byteLength: number): number[];
}