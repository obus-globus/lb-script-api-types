import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinRas$RASIPADDR } from '../../../../../com/sun/jna/platform/win32/WinRas$RASIPADDR.d.ts'
import type { WinRas$RASIPV6ADDR } from '../../../../../com/sun/jna/platform/win32/WinRas$RASIPV6ADDR.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinRas$RASENTRY extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    dwAlternateOffset: number;
    dwChannels: number;
    dwCountryCode: number;
    dwCountryID: number;
    dwCustomAuthKey: number;
    dwDialExtraPercent: number;
    dwDialExtraSampleSeconds: number;
    dwDialMode: number;
    dwEncryptionType: number;
    dwFrameSize: number;
    dwFramingProtocol: number;
    dwHangUpExtraPercent: number;
    dwHangUpExtraSampleSeconds: number;
    dwIPv4InterfaceMetric: number;
    dwIPv6InterfaceMetric: number;
    dwIPv6PrefixLength: number;
    dwIdleDisconnectSeconds: number;
    dwNetworkOutageTime: number;
    dwRedialCount: number;
    dwRedialPause: number;
    dwReserved1: number;
    dwReserved2: number;
    dwSize: number;
    dwSubEntries: number;
    dwTcpWindowSize: number;
    dwType: number;
    dwVpnStrategy: number;
    dwfNetProtocols: number;
    dwfOptions: number;
    dwfOptions2: number;
    dwfOptions3: number;
    guidId: Guid$GUID;
    ipaddr: WinRas$RASIPADDR;
    ipaddrDns: WinRas$RASIPADDR;
    ipaddrDnsAlt: WinRas$RASIPADDR;
    ipaddrWins: WinRas$RASIPADDR;
    ipaddrWinsAlt: WinRas$RASIPADDR;
    ipv6addr: WinRas$RASIPV6ADDR;
    ipv6addrDns: WinRas$RASIPV6ADDR;
    ipv6addrDnsAlt: WinRas$RASIPV6ADDR;
    szAreaCode: string[];
    szAutodialDll: string[];
    szAutodialFunc: string[];
    szCustomDialDll: string[];
    szDeviceName: string[];
    szDeviceType: string[];
    szDnsSuffix: string[];
    szLocalPhoneNumber: string[];
    szPrerequisiteEntry: string[];
    szPrerequisitePbk: string[];
    szScript: string[];
    szX25Address: string[];
    szX25Facilities: string[];
    szX25PadType: string[];
    szX25UserData: string[];
}