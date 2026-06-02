import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Platform } from '../../../okhttp3/internal/platform/Platform.d.ts'
export class Platform$Companion extends Object {
    INFO: number;
    WARN: number;
    /*not mapped: */ isAndroid(): boolean;
    // private logger: Logger;
    // private platform: Platform;
    alpnProtocolNames(protocols: Protocol[]): string[];
    concatLengthPrefixed(protocols: Protocol[]): number[];
    // private findPlatform(): Platform;
    get(): Platform;
    resetForTests(platform: Platform): void;
}