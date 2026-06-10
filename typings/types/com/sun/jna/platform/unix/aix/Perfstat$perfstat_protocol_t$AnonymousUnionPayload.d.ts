import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../../com/sun/jna/Union.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructICMP } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructICMP.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructICMPv6 } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructICMPv6.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructIP } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructIP.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructIPv6 } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructIPv6.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructNFS } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructNFS.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructNFSv2 } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructNFSv2.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructNFSv3 } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructNFSv3.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructNFSv4 } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructNFSv4.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructRPC } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructRPC.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructTCP } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructTCP.d.ts'
import type { Perfstat$perfstat_protocol_t$AnonymousStructUDP } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t$AnonymousStructUDP.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Perfstat$perfstat_protocol_t$AnonymousUnionPayload extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    icmp: Perfstat$perfstat_protocol_t$AnonymousStructICMP;
    icmpv6: Perfstat$perfstat_protocol_t$AnonymousStructICMPv6;
    ip: Perfstat$perfstat_protocol_t$AnonymousStructIP;
    ipv6: Perfstat$perfstat_protocol_t$AnonymousStructIPv6;
    nfs: Perfstat$perfstat_protocol_t$AnonymousStructNFS;
    nfsv2: Perfstat$perfstat_protocol_t$AnonymousStructNFSv2;
    nfsv3: Perfstat$perfstat_protocol_t$AnonymousStructNFSv3;
    nfsv4: Perfstat$perfstat_protocol_t$AnonymousStructNFSv4;
    rpc: Perfstat$perfstat_protocol_t$AnonymousStructRPC;
    tcp: Perfstat$perfstat_protocol_t$AnonymousStructTCP;
    udp: Perfstat$perfstat_protocol_t$AnonymousStructUDP;
}