import type { IovArray } from '../../../../io/netty/channel/unix/IovArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeArrays extends Object {
    constructor()
    // private iovArray: IovArray;
    cleanIovArray(): IovArray;
    free(): void;
}