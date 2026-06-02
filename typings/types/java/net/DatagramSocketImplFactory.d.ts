import type { DatagramSocketImpl } from '../../java/net/DatagramSocketImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface DatagramSocketImplFactory extends Object{
    createDatagramSocketImpl(): DatagramSocketImpl;
}