import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FileExtension } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/FileExtension.d.ts'
import type { RolloverFrequency } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverFrequency.d.ts'
import type { StrSubstitutor } from '../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
import type { ArrayPatternConverter } from '../../../../../../../org/apache/logging/log4j/core/pattern/ArrayPatternConverter.d.ts'
import type { FormattingInfo } from '../../../../../../../org/apache/logging/log4j/core/pattern/FormattingInfo.d.ts'
import type { PatternParser } from '../../../../../../../org/apache/logging/log4j/core/pattern/PatternParser.d.ts'
export class PatternProcessor extends Object {
    constructor(pattern: string)
    constructor(pattern: string, copy: PatternProcessor)
    readonly currentFileTime: number;
    readonly fileExtension: FileExtension;
    readonly frequency: RolloverFrequency;
    // private isTimeBased: boolean;
    readonly nextFileTime: number;
    readonly pattern: string;
    readonly patternConverters: ArrayPatternConverter[];
    readonly patternFields: FormattingInfo[];
    readonly prevFileTime: number;
    // private timeZone: TimeZone;
    // private calculateFrequency(pattern: string): RolloverFrequency;
    // private createPatternParser(): PatternParser;
    // private debugGetNextTime(nextTime: number): number;
    // private format(time: number): string;
    formatFileName(buf: StringBuilder, objects: Object[]): void;
    formatFileName(buf: StringBuilder, useCurrentTime: boolean, obj: Object): void;
    formatFileName(subst: StrSubstitutor, buf: StringBuilder, obj: Object): void;
    formatFileName(subst: StrSubstitutor, buf: StringBuilder, useCurrentTime: boolean, obj: Object): void;
    getCurrentFileTime(): number;
    getFileExtension(): FileExtension;
    getFrequency(): RolloverFrequency;
    getNextFileTime(): number;
    getNextTime(currentMillis: number, increment: number, modulus: boolean): number;
    getPattern(): string;
    getPatternConverters(): ArrayPatternConverter[];
    getPatternFields(): FormattingInfo[];
    getPrevFileTime(): number;
    // private increment(cal: Calendar, type: number, increment: number, modulate: boolean): void;
    // private patternContains(pattern: string, character: string): boolean;
    // private patternContains(pattern: string, chars: string[]): boolean;
    setCurrentFileTime(currentFileTime: number): void;
    setPrevFileTime(prevFileTime: number): void;
    setTimeBased(isTimeBased: boolean): void;
    toString(): string;
    updateTime(): void;
}