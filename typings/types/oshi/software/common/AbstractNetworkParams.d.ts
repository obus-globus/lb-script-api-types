import type { Object } from '../../../java/lang/Object.d.ts'
import type { NetworkParams } from '../../../oshi/software/os/NetworkParams.d.ts'
export abstract class AbstractNetworkParams extends Object implements NetworkParams {
    constructor()
    getDnsServers(): string[];
    getDomainName(): string;
    getHostName(): string;
    toString(): string;
}