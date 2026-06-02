import type { Object } from '../../../java/lang/Object.d.ts'
export interface NetworkParams extends Object{
    getDnsServers(): string[];
    getDomainName(): string;
    getHostName(): string;
    getIpv4DefaultGateway(): string;
    getIpv6DefaultGateway(): string;
}