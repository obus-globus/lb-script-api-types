import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MonitorResource$Builder } from '../../../../../../org/apache/logging/log4j/core/config/MonitorResource$Builder.d.ts'
export class MonitorResource extends Object {
    static newBuilder(): MonitorResource$Builder;
    constructor(arg0: URI, arg1: any)
    readonly uri: URI;
    equals(object: Object | null): boolean;
    getUri(): URI;
    hashCode(): number;
    toString(): string;
}