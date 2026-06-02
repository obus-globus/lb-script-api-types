import type { NativeDatagramPacketArray } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray.d.ts'
import type { IovArray } from '../../../../io/netty/channel/unix/IovArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeArrays extends Object {
    constructor()
    // private datagramPacketArray: NativeDatagramPacketArray;
    // private iovArray: IovArray;
    cleanDatagramPacketArray(): NativeDatagramPacketArray;
    cleanIovArray(): IovArray;
    free(): void;
}