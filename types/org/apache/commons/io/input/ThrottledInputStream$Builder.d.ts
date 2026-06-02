import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { ChronoUnit } from '../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { ProxyInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ProxyInputStream$AbstractBuilder.d.ts'
import type { ThrottledInputStream } from '../../../../../org/apache/commons/io/input/ThrottledInputStream.d.ts'
export class ThrottledInputStream$Builder extends ProxyInputStream$AbstractBuilder<ThrottledInputStream, ThrottledInputStream$Builder> {
    constructor()
    readonly maxBytesPerSecond: number;
    get(): ThrottledInputStream;
    getMaxBytesPerSecond(): number;
    setMaxBytes(arg0: number, arg1: Duration): ThrottledInputStream$Builder;
    setMaxBytes(arg0: number, arg1: ChronoUnit): ThrottledInputStream$Builder;
    // private setMaxBytesPerSecond(arg0: number): ThrottledInputStream$Builder;
    setMaxBytesPerSecond(arg0: number): void;
}