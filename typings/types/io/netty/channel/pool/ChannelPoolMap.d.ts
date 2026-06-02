import type { ChannelPool } from '../../../../io/netty/channel/pool/ChannelPool.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChannelPoolMap<K extends Object | number | string | boolean, P extends ChannelPool> extends Object{
    contains(arg0: K): boolean;
    get(arg0: K): P;
}