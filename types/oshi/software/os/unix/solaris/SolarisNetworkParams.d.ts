import type { AbstractNetworkParams } from '../../../../../oshi/software/common/AbstractNetworkParams.d.ts'
export class SolarisNetworkParams extends AbstractNetworkParams {
    constructor()
    getHostName(): string;
    getIpv4DefaultGateway(): string;
    getIpv6DefaultGateway(): string;
}