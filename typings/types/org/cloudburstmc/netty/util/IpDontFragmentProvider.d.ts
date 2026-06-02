import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IpDontFragmentProvider extends Object {
    static trySet(paramarg0: Channel, paramarg1: boolean): boolean;
    constructor()
}