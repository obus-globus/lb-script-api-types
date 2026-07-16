import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class IPHlpAPI$MIB_IF_ROW2 extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
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