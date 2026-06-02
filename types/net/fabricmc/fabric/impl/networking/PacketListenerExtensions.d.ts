import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractNetworkAddon } from '../../../../../net/fabricmc/fabric/impl/networking/AbstractNetworkAddon.d.ts'
export interface PacketListenerExtensions extends Object{
    getAddon(): AbstractNetworkAddon<Object>;
}