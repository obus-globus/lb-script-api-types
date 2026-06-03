import type { Class } from '../../../java/lang/Class.d.ts'
import type { SettingDescriptor } from '../../../jdk/jfr/SettingDescriptor.d.ts'
import type { ValueDescriptor } from '../../../jdk/jfr/ValueDescriptor.d.ts'
import type { Type } from '../../../jdk/jfr/internal/Type.d.ts'
import type { Throttler } from '../../../jdk/jfr/internal/settings/Throttler.d.ts'
import type { Modification } from '../../../jdk/jfr/internal/tracing/Modification.d.ts'
import type { TimespanRate } from '../../../jdk/jfr/internal/util/TimespanRate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PlatformEventType extends Type {
    static EVENT_NAME_PREFIX: string;
    static SETTINGS_PREFIX: string;
    static STACK_TRACE: Type;
    static SUPER_TYPE_ANNOTATION: string;
    static SUPER_TYPE_EVENT: string;
    static SUPER_TYPE_SETTING: string;
    static TYPES_PREFIX: string;
    static getKnownType(paramarg0: Class<Object>): Type;
    static getKnownType(paramarg0: string): Type;
    static getTypeId(paramarg0: Class<Object>): number;
    static isValidJavaFieldType(paramarg0: string): boolean;
    constructor(arg0: string, arg1: number, arg2: boolean, arg3: boolean)
    readonly beginChunk: boolean;
    readonly committable: boolean;
    // private cpuRate: TimespanRate;
    // private dynamicSettings: boolean;
    readonly enabled: boolean;
    readonly endChunk: boolean;
    readonly hasCutoff: boolean;
    // private hasHook: boolean;
    readonly hasLevel: boolean;
    readonly hasPeriod: boolean;
    readonly hasThrottle: boolean;
    // private isBackToBackSensitive: boolean;
    // private isCPUTimeMethodSampling: boolean;
    // private isInstrumented: boolean;
    // private isJDK: boolean;
    // private isJVM: boolean;
    // private isMethodSampling: boolean;
    readonly largeSize: boolean;
    // private markForInstrumentation: boolean;
    readonly period: number;
    readonly registered: boolean;
    readonly settings: SettingDescriptor[];
    readonly stackTraceEnabled: boolean;
    readonly stackTraceOffset: number;
    // private startFilterId: number;
    readonly thresholdTicks: number;
    readonly throttler: Throttler;
    add(arg0: SettingDescriptor): void;
    add(arg0: ValueDescriptor): void;
    // private determineBackToBackSensitive(): boolean;
    // private determineMethodSampling(): boolean;
    // private determineStackTraceOffset(): number;
    getAllSettings(): SettingDescriptor[];
    getModification(): Modification;
    getPeriod(): number;
    getSettings(): SettingDescriptor[];
    getStackFilterId(): number;
    getStackTraceEnabled(): boolean;
    getStackTraceOffset(): number;
    getThresholdTicks(): number;
    getThrottler(): Throttler;
    hasCutoff(): boolean;
    hasEventHook(): boolean;
    hasLevel(): boolean;
    hasPeriod(): boolean;
    hasStackFilters(): boolean;
    hasStackTrace(): boolean;
    hasThreshold(): boolean;
    hasThrottle(): boolean;
    isBackToBackSensitive(): boolean;
    isBeginChunk(): boolean;
    isCPUTimeMethodSampling(): boolean;
    isChunkTime(): boolean;
    isCommittable(): boolean;
    isEnabled(): boolean;
    isEndChunk(): boolean;
    // private isExceptionEvent(): boolean;
    isInstrumented(): boolean;
    isJDK(): boolean;
    isJVM(): boolean;
    isLargeSize(): boolean;
    isMarkedForInstrumentation(): boolean;
    isMethodSampling(): boolean;
    isRegistered(): boolean;
    isSystem(): boolean;
    markForInstrumentation(arg0: boolean): void;
    setCPUThrottle(arg0: TimespanRate): void;
    setCutoff(arg0: number): void;
    setEnabled(arg0: boolean): void;
    setEventHook(arg0: boolean): void;
    setHasCutoff(arg0: boolean): void;
    setHasLevel(arg0: boolean): void;
    setHasPeriod(arg0: boolean): void;
    setHasThrottle(arg0: boolean): void;
    setInstrumented(): void;
    setLargeSize(): void;
    setLevel(arg0: number): void;
    // private setMiscellaneous(arg0: number): void;
    setPeriod(arg0: number, arg1: boolean, arg2: boolean): void;
    setRegistered(arg0: boolean): boolean;
    setStackFilterId(arg0: number): void;
    setStackTraceEnabled(arg0: boolean): void;
    setThreshold(arg0: number): void;
    setThrottle(arg0: number, arg1: number): void;
    setThrottler(arg0: Throttler): void;
    // private updateCommittable(): void;
}