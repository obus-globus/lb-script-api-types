import type { AbstractNetworkParams } from '../../../../../oshi/software/common/AbstractNetworkParams.d.ts'
export class FreeBsdNetworkParams extends AbstractNetworkParams {
    constructor()
    getDomainName(): string;
    getHostName(): string;
    getIpv4DefaultGateway(): string;
    getIpv6DefaultGateway(): string;
}