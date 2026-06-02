import type { InetAddress } from '../java/net/InetAddress.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface Dns extends Object{
    lookup(hostname: string): InetAddress[];
}