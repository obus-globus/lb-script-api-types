import type { SocketImpl } from '../../java/net/SocketImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SocketImplFactory extends Object{
    createSocketImpl(): SocketImpl;
}