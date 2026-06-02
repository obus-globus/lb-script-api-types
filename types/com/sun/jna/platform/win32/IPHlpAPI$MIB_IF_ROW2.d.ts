import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IPHlpAPI$MIB_IF_ROW2 extends Structure {
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
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    AccessType: number;
    AdminStatus: number;
    Alias: string[];
    ConnectionType: number;
    Description: string[];
    DirectionType: number;
    InBroadcastOctets: number;
    InDiscards: number;
    InErrors: number;
    InMulticastOctets: number;
    InNUcastPkts: number;
    InOctets: number;
    InUcastOctets: number;
    InUcastPkts: number;
    InUnknownProtos: number;
    InterfaceAndOperStatusFlags: number;
    InterfaceGuid: Guid$GUID;
    InterfaceIndex: number;
    InterfaceLuid: number;
    MediaConnectState: number;
    MediaType: number;
    Mtu: number;
    NetworkGuid: Guid$GUID;
    OperStatus: number;
    OutBroadcastOctets: number;
    OutDiscards: number;
    OutErrors: number;
    OutMulticastOctets: number;
    OutNUcastPkts: number;
    OutOctets: number;
    OutQLen: number;
    OutUcastOctets: number;
    OutUcastPkts: number;
    PermanentPhysicalAddress: number[];
    PhysicalAddress: number[];
    PhysicalAddressLength: number;
    PhysicalMediumType: number;
    ReceiveLinkSpeed: number;
    TransmitLinkSpeed: number;
    TunnelType: number;
    Type: number;
}