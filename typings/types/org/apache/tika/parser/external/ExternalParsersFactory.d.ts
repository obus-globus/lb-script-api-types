import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServiceLoader } from '../../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { TikaConfig } from '../../../../../org/apache/tika/config/TikaConfig.d.ts'
import type { ExternalParser } from '../../../../../org/apache/tika/parser/external/ExternalParser.d.ts'
export class ExternalParsersFactory extends Object {
    static attachExternalParsers(paramarg0: ExternalParser[], paramarg1: TikaConfig): void;
    static attachExternalParsers(paramarg0: TikaConfig): void;
    static create(): ExternalParser[];
    static create(paramarg0: string, paramarg1: ServiceLoader): ExternalParser[];
    static create(...paramarg0: URL[]): ExternalParser[];
    static create(paramarg0: ServiceLoader): ExternalParser[];
    constructor()
}