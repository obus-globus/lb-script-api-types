import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TimeBasedTriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TimeBasedTriggeringPolicy.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class TimeBasedTriggeringPolicy$Builder extends Object implements Builder<TimeBasedTriggeringPolicy> {
    constructor()
    readonly interval: number;
    readonly maxRandomDelay: number;
    readonly modulate: boolean;
    build(): TimeBasedTriggeringPolicy;
    getErrorPrefix(): string;
    getInterval(): number;
    getMaxRandomDelay(): number;
    isModulate(): boolean;
    isValid(): boolean;
    withInterval(interval: number): TimeBasedTriggeringPolicy$Builder;
    withMaxRandomDelay(maxRandomDelay: number): TimeBasedTriggeringPolicy$Builder;
    withModulate(modulate: boolean): TimeBasedTriggeringPolicy$Builder;
}