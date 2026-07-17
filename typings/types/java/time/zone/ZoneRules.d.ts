import type { JavaMap } from '../../../JavaMap.d.ts'
import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { LocalDateTime } from '../../../java/time/LocalDateTime.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { ZoneOffsetTransition } from '../../../java/time/zone/ZoneOffsetTransition.d.ts'
import type { ZoneOffsetTransitionRule } from '../../../java/time/zone/ZoneOffsetTransitionRule.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZoneRules extends Object implements Serializable {
    static of(paramarg0: ZoneOffset): ZoneRules;
    static of(paramarg0: ZoneOffset, paramarg1: ZoneOffset, paramarg2: ZoneOffsetTransition[], paramarg3: ZoneOffsetTransition[], paramarg4: ZoneOffsetTransitionRule[]): ZoneRules;
    constructor(arg0: ZoneOffset, arg1: ZoneOffset, arg2: ZoneOffsetTransition[], arg3: ZoneOffsetTransition[], arg4: ZoneOffsetTransitionRule[])
    // private lastRules: ZoneOffsetTransitionRule[];
    // private lastRulesCache: JavaMap<number, ZoneOffsetTransition[]>;
    // private savingsInstantTransitions: number[];
    // private savingsLocalTransitions: LocalDateTime[];
    // private standardOffsets: ZoneOffset[];
    // private standardTransitions: number[];
    // private wallOffsets: ZoneOffset[];
    equals(arg0: Object | null): boolean;
    // private findOffsetInfo(arg0: LocalDateTime, arg1: ZoneOffsetTransition): Object;
    // private findTransitionArray(arg0: number): ZoneOffsetTransition[];
    // private findYear(arg0: number, arg1: ZoneOffset): number;
    getDaylightSavings(arg0: Instant): Duration;
    getOffset(arg0: Instant): ZoneOffset;
    getOffset(arg0: LocalDateTime): ZoneOffset;
    // private getOffsetInfo(arg0: LocalDateTime): Object;
    getStandardOffset(arg0: Instant): ZoneOffset;
    getTransition(arg0: LocalDateTime): ZoneOffsetTransition;
    getTransitionRules(): ZoneOffsetTransitionRule[];
    getTransitions(): ZoneOffsetTransition[];
    getValidOffsets(arg0: LocalDateTime): ZoneOffset[];
    hashCode(): number;
    isDaylightSavings(arg0: Instant): boolean;
    isFixedOffset(): boolean;
    isValidOffset(arg0: LocalDateTime, arg1: ZoneOffset): boolean;
    nextTransition(arg0: Instant): ZoneOffsetTransition;
    previousTransition(arg0: Instant): ZoneOffsetTransition;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}