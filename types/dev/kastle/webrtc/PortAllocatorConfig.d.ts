import type { Object } from '../../../java/lang/Object.d.ts'
export class PortAllocatorConfig extends Object {
    static PORTALLOCATOR_DISABLE_ADAPTER_ENUMERATION: number;
    static PORTALLOCATOR_DISABLE_COSTLY_NETWORKS: number;
    static PORTALLOCATOR_DISABLE_DEFAULT_LOCAL_CANDIDATE: number;
    static PORTALLOCATOR_DISABLE_LINK_LOCAL_NETWORKS: number;
    static PORTALLOCATOR_DISABLE_RELAY: number;
    static PORTALLOCATOR_DISABLE_STUN: number;
    static PORTALLOCATOR_DISABLE_TCP: number;
    static PORTALLOCATOR_DISABLE_UDP: number;
    static PORTALLOCATOR_DISABLE_UDP_RELAY: number;
    static PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS: number;
    static PORTALLOCATOR_ENABLE_IPV6: number;
    static PORTALLOCATOR_ENABLE_IPV6_ON_WIFI: number;
    static PORTALLOCATOR_ENABLE_SHARED_SOCKET: number;
    static PORTALLOCATOR_ENABLE_STUN_RETRANSMIT_ATTRIBUTE: number;
    constructor()
    constructor(arg0: number, arg1: number, arg2: number)
    flags: number;
    maxPort: number;
    minPort: number;
    clearFlag(arg0: number): PortAllocatorConfig;
    isAdapterEnumerationDisabled(): boolean;
    isAnyAddressPortsEnabled(): boolean;
    isCostlyNetworksDisabled(): boolean;
    isDefaultLocalCandidateDisabled(): boolean;
    isFlagEnabled(arg0: number): boolean;
    isIpv6Enabled(): boolean;
    isIpv6OnWifiEnabled(): boolean;
    isLinkLocalNetworksDisabled(): boolean;
    isRelayDisabled(): boolean;
    isSharedSocketEnabled(): boolean;
    isStunDisabled(): boolean;
    isStunRetransmitAttributeEnabled(): boolean;
    isTcpDisabled(): boolean;
    isUdpDisabled(): boolean;
    isUdpRelayDisabled(): boolean;
    setDisableAdapterEnumeration(arg0: boolean): PortAllocatorConfig;
    setDisableCostlyNetworks(arg0: boolean): PortAllocatorConfig;
    setDisableDefaultLocalCandidate(arg0: boolean): PortAllocatorConfig;
    setDisableLinkLocalNetworks(arg0: boolean): PortAllocatorConfig;
    setDisableRelay(arg0: boolean): PortAllocatorConfig;
    setDisableStun(arg0: boolean): PortAllocatorConfig;
    setDisableTcp(arg0: boolean): PortAllocatorConfig;
    setDisableUdp(arg0: boolean): PortAllocatorConfig;
    setDisableUdpRelay(arg0: boolean): PortAllocatorConfig;
    setEnableAnyAddressPorts(arg0: boolean): PortAllocatorConfig;
    setEnableIpv6(arg0: boolean): PortAllocatorConfig;
    setEnableIpv6OnWifi(arg0: boolean): PortAllocatorConfig;
    setEnableSharedSocket(arg0: boolean): PortAllocatorConfig;
    setEnableStunRetransmitAttribute(arg0: boolean): PortAllocatorConfig;
    setFlag(arg0: number): PortAllocatorConfig;
}