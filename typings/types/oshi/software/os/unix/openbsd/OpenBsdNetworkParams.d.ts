import type { AbstractNetworkParams } from '../../../../../oshi/software/common/AbstractNetworkParams.d.ts'
export class OpenBsdNetworkParams extends AbstractNetworkParams {
    constructor()
    getIpv4DefaultGateway(): string;
    getIpv6DefaultGateway(): string;
}