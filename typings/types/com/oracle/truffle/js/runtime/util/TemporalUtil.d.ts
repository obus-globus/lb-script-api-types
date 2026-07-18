import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { EnumerableOwnPropertyNamesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerableOwnPropertyNamesNode.d.ts'
import type { JSToIntegerOrInfinityNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerOrInfinityNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { ToTemporalCalendarIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalCalendarIdentifierNode.d.ts'
import type { ToTemporalTimeZoneIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalTimeZoneIdentifierNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { DateDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/DateDurationRecord.d.ts'
import type { ISODateRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ISODateRecord.d.ts'
import type { JSTemporalDateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDateTimeRecord.d.ts'
import type { JSTemporalDurationObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationObject.d.ts'
import type { JSTemporalDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationRecord.d.ts'
import type { JSTemporalInstantObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalInstantObject.d.ts'
import type { JSTemporalParserRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalParserRecord.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { JSTemporalPrecisionRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPrecisionRecord.d.ts'
import type { JSTemporalTimeZoneRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalTimeZoneRecord.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { ParseISODateTimeResult } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ParseISODateTimeResult.d.ts'
import type { TimeDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TimeDurationRecord.d.ts'
import type { TimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TimeRecord.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { TemporalUtil$AddDaysToZonedDateTimeResult } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$AddDaysToZonedDateTimeResult.d.ts'
import type { TemporalUtil$Disambiguation } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Disambiguation.d.ts'
import type { TemporalUtil$FieldsType } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$FieldsType.d.ts'
import type { TemporalUtil$ISOYearMonthRecord } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$ISOYearMonthRecord.d.ts'
import type { TemporalUtil$MatchBehaviour } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$MatchBehaviour.d.ts'
import type { TemporalUtil$NormalizedDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$NormalizedDurationWithTotalRecord.d.ts'
import type { TemporalUtil$NormalizedTimeDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$NormalizedTimeDurationWithTotalRecord.d.ts'
import type { TemporalUtil$OffsetBehaviour } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$OffsetBehaviour.d.ts'
import type { TemporalUtil$OffsetOption } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$OffsetOption.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$ShowCalendar } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$ShowCalendar.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
import type { TemporalUtil$UnsignedRoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$UnsignedRoundingMode.d.ts'
import type { BigDecimal } from '../../../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../../../java/math/MathContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class TemporalUtil extends Object {
    static ADD: number;
    static BD_10: BigDecimal;
    static BD_1000: BigDecimal;
    static BD_60: BigDecimal;
    static BI_1000: BigInt;
    static BI_1000_000: BigInt;
    static BI_24: BigInt;
    static BI_3600: BigInt;
    static BI_60: BigInt;
    static BI_86400: BigInt;
    static BI_NS_PER_DAY: BigInt;
    static BI_NS_PER_HOUR: BigInt;
    static BI_NS_PER_MINUTE: BigInt;
    static BI_NS_PER_MS: BigInt;
    static BI_NS_PER_SECOND: BigInt;
    static HOURS_PER_DAY: number;
    static MINUTES_PER_HOUR: number;
    static MS_PER_DAY: number;
    static NS_PER_DAY: number;
    static NS_PER_DAY_LONG: number;
    static SECONDS_PER_MINUTE: number;
    static SINCE: number;
    static SUBTRACT: number;
    static TIME_LIKE_PROPERTIES: TruffleString[];
    static UNTIL: number;
    static listAuto: TruffleString[];
    static listAutoAlwaysNeverCritical: TruffleString[];
    static listAutoNever: TruffleString[];
    static listAutoNeverCritical: TruffleString[];
    static listConstrainReject: TruffleString[];
    static listD: TruffleString[];
    static listDMC: TruffleString[];
    static listDMMCY: TruffleString[];
    static listDisambiguation: TruffleString[];
    static listEmpty: TruffleString[];
    static listMCY: TruffleString[];
    static listMMCY: TruffleString[];
    static listOffset: TruffleString[];
    static listOffsets: TruffleString[];
    static listRoundingMode: TruffleString[];
    static listTimeUnits: TruffleString[];
    static listTimeUnitsOffset: TruffleString[];
    static listTimeUnitsOffsetTZ: TruffleString[];
    static listTimeZone: TruffleString[];
    static listTimeZoneOffset: TruffleString[];
    static listY: TruffleString[];
    static listYD: TruffleString[];
    static mc_20_floor: MathContext;
    static singularToPlural: JavaMap<TruffleString, TruffleString>;
    static temporalFieldDefaults: JavaMap<TruffleString, Object>;
    static unitMappingDate: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingDateOrAuto: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingDateTime: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingDateTimeOrAuto: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingTime: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingTimeOrAuto: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingTimeOrDay: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingYearMonth: JavaMap<TruffleString, TemporalUtil$Unit>;
    static unitMappingYearMonthOrAuto: JavaMap<TruffleString, TemporalUtil$Unit>;
    static add24HourDaysToNormalizedTimeDuration(paramtimeDurationTotalNanoseconds: BigInt, paramdays: number): BigInt;
    static addDaysToZonedDateTime(paramctx: JSContext, paramrealm: JSRealm, paraminstant: JSTemporalInstantObject, paramdateTime: JSTemporalPlainDateTimeObject, paramtimeZone: TruffleString, paramdays: number): TemporalUtil$AddDaysToZonedDateTimeResult;
    static addDaysToZonedDateTime(paramctx: JSContext, paramrealm: JSRealm, paraminstant: JSTemporalInstantObject, paramdateTime: JSTemporalPlainDateTimeObject, paramtimeZone: TruffleString, paramdays: number, paramoverflow: TemporalUtil$Overflow): TemporalUtil$AddDaysToZonedDateTimeResult;
    static addISODate(paramyear: number, parammonth: number, paramday: number, paramyears: number, parammonths: number, paramweeks: number, paramdaysP: number, paramoverflow: TemporalUtil$Overflow): ISODateRecord;
    static addInstant(paramepochNanoseconds: BigInt, paramnormalizedTimeDuration: BigInt): BigInt;
    static addInstant(paramepochNanoseconds: BigInt, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): BigInt;
    static addNormalizedTimeDuration(paramone: BigInt, paramtwo: BigInt): BigInt;
    static addNormalizedTimeDurationToEpochNanoseconds(paramtimeDurationTotalNanoseconds: BigInt, paramepochNs: BigInt): BigInt;
    static addTime(paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramnormalizedTimeDuration: BigInt, paramnode: Node, paramerrorBranch: InlinedBranchProfile): TimeRecord;
    static addTimeDouble(paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): TimeRecord;
    static applyUnsignedRoundingMode(paramnumerator: BigInt, paramdenominator: BigInt, paramr1: number, paramr2: number, paramurm: TemporalUtil$UnsignedRoundingMode): number;
    static applyUnsignedRoundingMode(paramx: number, paramr1: number, paramr2: number, paramurm: TemporalUtil$UnsignedRoundingMode): number;
    static balanceISODate(paramyear: number, parammonth: number, paramday: number): ISODateRecord;
    static balanceISODateTime(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number): JSTemporalDateTimeRecord;
    static balanceISOYearMonth(paramyear: number, parammonth: number): ISODateRecord;
    static balanceTime(paramh: number, parammin: number, paramsec: number, parammils: number, parammics: number, paramns: number): TimeRecord;
    static balanceTimeDouble(paramh: number, parammin: number, paramsec: number, parammils: number, parammics: number, paramns: number, paramnode: Node, paramerrorBranch: InlinedBranchProfile): TimeRecord;
    static balanceTimeDuration(paramnormalizedTimeDuration: BigInt, paramlargestUnit: TemporalUtil$Unit): TimeDurationRecord;
    static bigIntToLong(paramval: BigInt): number;
    static bitoi(parambi: BigInt): number;
    static buildISOMonthCode(parammonth: number): TruffleString;
    static builtinTimeZoneGetOffsetStringFor(paramtimeZone: TruffleString, paraminstant: JSTemporalInstantObject): TruffleString;
    static builtinTimeZoneGetPlainDateTimeFor(paramctx: JSContext, paramrealm: JSRealm, paramtimeZone: TruffleString, paraminstant: JSTemporalInstantObject, paramcalendar: TruffleString): JSTemporalPlainDateTimeObject;
    static builtinTimeZoneGetPlainDateTimeFor(paramctx: JSContext, paramrealm: JSRealm, paraminstant: JSTemporalInstantObject, paramcalendar: TruffleString, paramprecalculatedOffsetNanoseconds: number): JSTemporalPlainDateTimeObject;
    static calendarDateAdd(paramcontext: JSContext, paramrealm: JSRealm, paramcalendar: TruffleString, paramisoDate: JSTemporalPlainDateObject, paramduration: JSTemporalDurationObject, paramoverflow: TemporalUtil$Overflow, paramnode: Node, paramerrorBranch: InlinedBranchProfile): JSTemporalPlainDateObject;
    static calendarDateToISO(paramcalendar: TruffleString, paramfields: JSDynamicObject, paramoverflow: TemporalUtil$Overflow): ISODateRecord;
    static calendarDateUntil(paramcontext: JSContext, paramrealm: JSRealm, paramcalendar: TruffleString, paramone: JSTemporalPlainDateObject, paramtwo: JSTemporalPlainDateObject, paramlargestUnit: TemporalUtil$Unit, paramnode: Node, paramerrorBranch: InlinedBranchProfile): JSTemporalDurationObject;
    static calendarEquals(paramone: Object, paramtwo: Object, paramtoCalendarIdentifier: ToTemporalCalendarIdentifierNode): boolean;
    static calendarExtraFields(paramcalendar: TruffleString, paramcalendarFieldNames: TruffleString[]): TruffleString[];
    static calendarISOToDate(paramctx: JSContext, paramcalendar: TruffleString, paramisoDate: ISODateRecord): JSObject;
    static calendarMergeFields(paramctx: JSContext, paramcalendar: TruffleString, paramfields: JSDynamicObject, paramadditionalFields: JSDynamicObject): JSDynamicObject;
    static calendarMonthDayToISOReferenceDate(paramcalendar: TruffleString, paramfields: JSDynamicObject, paramoverflow: TemporalUtil$Overflow): ISODateRecord;
    static calendarResolveFields(paramctx: JSContext, paramcalendar: TruffleString, paramfields: JSDynamicObject, paramtype: TemporalUtil$FieldsType, paramtoIntegerOrInfinity: JSToIntegerOrInfinityNode): void;
    static canParseAsTimeZoneNumericUTCOffset(paramstring: TruffleString): boolean;
    static checkISODaysRange(paramyear: number, parammonth: number, paramdate: number): void;
    static combineDateAndNormalizedTimeDuration(paramdateDuration: DateDurationRecord, paramnormalizedTimeDuration: BigInt): NormalizedDurationRecord;
    static compareEpochNanoseconds(paramone: BigInt, paramtwo: BigInt): number;
    static compareISODate(paramy1: number, paramm1: number, paramd1: number, paramy2: number, paramm2: number, paramd2: number): number;
    static compareISODateTime(paramyear: number, parammonth: number, paramday: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number, paramyear2: number, parammonth2: number, paramday2: number, paramhours2: number, paramminutes2: number, paramseconds2: number, parammilliseconds2: number, parammicroseconds2: number, paramnanoseconds2: number): number;
    static compareTemporalTime(paramh1: number, parammin1: number, params1: number, paramms1: number, parammus1: number, paramns1: number, paramh2: number, parammin2: number, params2: number, paramms2: number, parammus2: number, paramns2: number): number;
    static consolidateCalendars(paramone: TruffleString, paramtwo: TruffleString, paramtoCalendarIdentifier: ToTemporalCalendarIdentifierNode): TruffleString;
    static constrainTime(paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): JSTemporalDurationRecord;
    static constrainToRange(paramvalue: number, paramminimum: number, parammaximum: number): number;
    static createDataPropertyOrThrow(paramctx: JSContext, paramobj: JSDynamicObject, paramkey: Object, paramvalue: Object): void;
    static createDateDurationRecord(paramyears: number, parammonths: number, paramweeks: number, paramdays: number): DateDurationRecord;
    static createISODateRecord(paramyear: number, parammonth: number, paramday: number): ISODateRecord;
    static createNormalizedDurationRecord(paramyears: number, parammonths: number, paramweeks: number, paramdays: number, paramnormalizedTimeDuration: BigInt): NormalizedDurationRecord;
    static daysUntil(paramearlier: JSTemporalPlainDateObject, paramlater: JSTemporalPlainDateObject): number;
    static defaultTemporalLargestUnit(paramyears: number, parammonths: number, paramweeks: number, paramdays: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number): TemporalUtil$Unit;
    static differenceInstant(paramns1: BigInt, paramns2: BigInt, paramroundingIncrement: number, paramsmallestUnit: TemporalUtil$Unit, paramroundingMode: TemporalUtil$RoundingMode): TemporalUtil$NormalizedTimeDurationWithTotalRecord;
    static differenceTime(paramh1: number, parammin1: number, params1: number, paramms1: number, parammus1: number, paramns1: number, paramh2: number, parammin2: number, params2: number, paramms2: number, parammus2: number, paramns2: number): BigInt;
    static disambiguatePossibleEpochNanoseconds(paramctx: JSContext, paramrealm: JSRealm, parampossibleEpochNs: BigInt[], paramtimeZone: TruffleString, paramdateTime: JSTemporalPlainDateTimeObject, paramdisambiguation: TemporalUtil$Disambiguation): BigInt;
    static divideNormalizedTimeDurationAsDouble(paramnormalizedTimeDuration: BigInt, paramdivisor: number): number;
    static divideNormalizedTimeDurationAsDoubleTruncate(paramnormalizedTimeDuration: BigInt, paramdivisor: number): number;
    static dtoi(paramd: number): number;
    static dtol(paramd: number): number;
    static durationSign(paramyears: number, parammonths: number, paramweeks: number, paramdays: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): number;
    static formatCalendarAnnotation(paramid: TruffleString, paramshowCalendar: TemporalUtil$ShowCalendar): TruffleString;
    static formatISOTimeZoneOffsetString(paramoffsetNs: number): TruffleString;
    static formatSecondsStringPart(paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramprecision: Object): TruffleString;
    static formatTimeZoneOffsetString(paramoffsetNanosecondsParam: number): TruffleString;
    static getAvailableNamedTimeZoneIdentifier(paramtimeZone: TruffleString): Pair<TruffleString, TruffleString>;
    static getEpochNanosecondsFor(paramctx: JSContext, paramrealm: JSRealm, paramtimeZone: TruffleString, paramisoDateTime: JSTemporalPlainDateTimeObject, paramdisambiguation: TemporalUtil$Disambiguation): BigInt;
    static getIANATimeZoneNextTransition(paramtimeZoneIdentifier: TruffleString, paramepochNanoseconds: BigInt): BigInt;
    static getIANATimeZoneOffsetNanoseconds(paramnanoseconds: BigInt, paramidentifier: TruffleString): number;
    static getIANATimeZonePreviousTransition(paramtimeZoneIdentifier: TruffleString, paramepochNanoseconds: BigInt): BigInt;
    static getISODateTimeFor(paramtimeZone: TruffleString, paramepochNs: BigInt): JSTemporalDateTimeRecord;
    static getISOPartsFromEpoch(paramepochNanoseconds: BigInt): JSTemporalDateTimeRecord;
    static getNamedTimeZoneEpochNanoseconds(paramidentifier: TruffleString, paramisoYear: number, paramisoMonth: number, paramisoDay: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): BigInt[];
    static getOffsetNanosecondsFor(paramtimeZone: TruffleString, paramepochNs: BigInt): number;
    static getTemporalOverflowOption(paramoptions: Object, paramgetOptionNode: TemporalGetOptionNode): TemporalUtil$Overflow;
    static getUTCEpochNanoseconds(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number): BigInt;
    static getUnsignedRoundingMode(paramroundingMode: TemporalUtil$RoundingMode, paramisNegative: boolean): TemporalUtil$UnsignedRoundingMode;
    static interpretISODateTimeOffset(paramctx: JSContext, paramrealm: JSRealm, paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramoffsetBehaviour: TemporalUtil$OffsetBehaviour, paramoffsetNanoseconds: number, paramtimeZone: TruffleString, paramdisambiguation: TemporalUtil$Disambiguation, paramoffsetOption: TemporalUtil$OffsetOption, parammatchBehaviour: TemporalUtil$MatchBehaviour): BigInt;
    static interpretTemporalDateTimeFields(paramcalendar: TruffleString, paramfields: JSDynamicObject, paramoverflow: TemporalUtil$Overflow, paramdateFromFieldsNode: TemporalCalendarDateFromFieldsNode): JSTemporalDateTimeRecord;
    static isTemporalInstant(paramobj: Object): boolean;
    static isTemporalZonedDateTime(paramobj: Object): boolean;
    static isValidDuration(paramyears: number, parammonths: number, paramweeks: number, paramdays: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): boolean;
    static isValidEpochNanoseconds(paramnanoseconds: BigInt): boolean;
    static isValidISODate(paramyear: number, parammonth: number, paramday: number): boolean;
    static isValidTime(paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): boolean;
    static isoDateTimeWithinLimits(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number): boolean;
    static isoDateToFields(paramctx: JSContext, paramcalendar: TruffleString, paramisoDate: ISODateRecord, paramtype: TemporalUtil$FieldsType): JSObject;
    static isoDateWithinLimits(paramyear: number, parammonth: number, paramday: number): boolean;
    static isoDaysInMonth(paramyear: number, parammonth: number): number;
    static isoDaysInYear(paramyear: number): number;
    static isoYearMonthFromFields(paramfields: JSDynamicObject, paramoverflow: TemporalUtil$Overflow): ISODateRecord;
    static isoYearMonthWithinLimits(paramyear: number, parammonth: number): boolean;
    static largerOfTwoTemporalUnits(parama: TemporalUtil$Unit, paramb: TemporalUtil$Unit): TemporalUtil$Unit;
    static ltoi(paraml: number): number;
    static maximumTemporalDurationRoundingIncrement(paramunit: TemporalUtil$Unit): number;
    static maybeFormatCalendarAnnotation(paramcalendar: Object, paramshowCalendar: TemporalUtil$ShowCalendar): TruffleString;
    static mergeLargestUnitOption(paramctx: JSContext, paramnamesNode: EnumerableOwnPropertyNamesNode, paramoptions: JSDynamicObject, paramlargestUnit: TemporalUtil$Unit): JSObject;
    static nanosToMillis(paramnanos: BigInt): number;
    static negateTemporalRoundingMode(paramroundingMode: TemporalUtil$RoundingMode): TemporalUtil$RoundingMode;
    static nonNegativeModulo(paramx: number, paramy: number): number;
    static normalizeTimeDuration(paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): BigInt;
    static normalizeTimeDurationSeconds(paramtimeDurationTotalNanoseconds: BigInt): number;
    static normalizeTimeDurationSubseconds(paramtimeDurationTotalNanoseconds: BigInt): number;
    static normalizedTimeDurationAbs(paramtimeDurationTotalNanoseconds: BigInt): BigInt;
    static normalizedTimeDurationFromEpochNanosecondsDifference(paramone: BigInt, paramtwo: BigInt): BigInt;
    static normalizedTimeDurationSign(paramtimeDurationTotalNanoseconds: BigInt): number;
    static padISOYear(paramyear: number): TruffleString;
    static parseTemporalCalendarString(paramstring: TruffleString): TruffleString;
    static parseTemporalDateString(paramstring: TruffleString): JSTemporalDateTimeRecord;
    static parseTemporalDateTimeString(paramzoned: boolean, paramstring: TruffleString): ParseISODateTimeResult;
    static parseTemporalInstant(paramstring: TruffleString): BigInt;
    static parseTemporalMonthDayString(paramstring: TruffleString): JSTemporalDateTimeRecord;
    static parseTemporalRelativeToString(paramisoString: TruffleString): ParseISODateTimeResult;
    static parseTemporalTimeString(paramstring: TruffleString): JSTemporalDateTimeRecord;
    static parseTemporalTimeZoneIdentifier(paramstring: TruffleString): JSTemporalParserRecord;
    static parseTemporalTimeZoneString(paramstring: TruffleString): JSTemporalTimeZoneRecord;
    static parseTemporalYearMonthString(paramstring: TruffleString): JSTemporalDateTimeRecord;
    static parseTimeZoneOffsetNs(paramrec: JSTemporalParserRecord): number;
    static parseTimeZoneOffsetString(paramstring: TruffleString): number;
    static parseTimeZoneOffsetStringHelper(paramstring: TruffleString): JSTemporalParserRecord;
    static prepareCalendarFields(paramctx: JSContext, paramcalendar: TruffleString, paramfields: Object, paramcalendarFieldNames: TruffleString[], paramnonCalendarFieldNames: TruffleString[], paramrequiredFields: TruffleString[]): JSObject;
    static regulateISODate(paramyear: number, parammonthParam: number, paramdayParam: number, paramoverflow: TemporalUtil$Overflow): ISODateRecord;
    static regulateISOYearMonth(paramyear: number, parammonth: number, paramoverflow: TemporalUtil$Overflow): TemporalUtil$ISOYearMonthRecord;
    static regulateTime(paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number, paramoverflow: TemporalUtil$Overflow): JSTemporalDurationRecord;
    static rejectDurationSign(paramyears: number, parammonths: number, paramweeks: number, paramdays: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): void;
    static remainderNormalizedTimeDuration(paramnormalizedTimeDuration: BigInt, paramdivisor: number): BigInt;
    static roundISODateTime(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramincrement: number, paramunit: TemporalUtil$Unit, paramroundingMode: TemporalUtil$RoundingMode): JSTemporalDurationRecord;
    static roundNormalizedTimeDurationToIncrement(paramnormalizedTimeDuration: BigInt, paramincrement: BigInt, paramroundingMode: TemporalUtil$RoundingMode): BigInt;
    static roundNormalizedTimeDurationToIncrement(paramnormalizedTimeDuration: BigInt, paramunitLengthInNs: number, paramincrement: number, paramroundingMode: TemporalUtil$RoundingMode): BigInt;
    static roundNumberToIncrement(paramx: number, paramincrement: number, paramroundingMode: TemporalUtil$RoundingMode): number;
    static roundNumberToIncrementAsIfPositive(paramx: BigInt, paramincrement: BigInt, paramroundingMode: TemporalUtil$RoundingMode): BigInt;
    static roundTemporalInstant(paramns: BigInt, paramincrement: number, paramunit: TemporalUtil$Unit, paramroundingMode: TemporalUtil$RoundingMode): BigInt;
    static roundTime(paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number, paramincrement: number, paramunit: TemporalUtil$Unit, paramroundingMode: TemporalUtil$RoundingMode): TimeRecord;
    static roundTimeDuration(paramdays0: number, paramnorm0: BigInt, paramincrement: number, paramunit: TemporalUtil$Unit, paramroundingMode: TemporalUtil$RoundingMode): TemporalUtil$NormalizedDurationWithTotalRecord;
    static roundTowardsZero(paramd: number): number;
    static subtractNormalizedTimeDuration(paramone: BigInt, paramtwo: BigInt): BigInt;
    static systemDateTime(paramrealm: JSRealm, paramtemporalTimeZoneLike: Object, paramtoTimeZoneIdentifier: ToTemporalTimeZoneIdentifierNode): JSTemporalDateTimeRecord;
    static systemInstant(paramctx: JSContext, paramrealm: JSRealm): JSTemporalInstantObject;
    static systemTimeZoneIdentifier(paramrealm: JSRealm): TruffleString;
    static systemUTCEpochNanoseconds(paramrealm: JSRealm): BigInt;
    static temporalInstantToString(paraminstant: JSTemporalInstantObject, paramtimeZone: Object, paramprecision: Object): TruffleString;
    static temporalZonedDateTimeToString(paramctx: JSContext, paramrealm: JSRealm, paramzonedDateTime: JSDynamicObject, paramprecision: Object, paramshowCalendar: TemporalUtil$ShowCalendar, paramshowTimeZone: TruffleString, paramshowOffset: TruffleString): TruffleString;
    static temporalZonedDateTimeToString(paramctx: JSContext, paramrealm: JSRealm, paramzonedDateTimeParam: JSDynamicObject, paramprecision: Object, paramshowCalendar: TemporalUtil$ShowCalendar, paramshowTimeZone: TruffleString, paramshowOffset: TruffleString, paramincrementParam: number, paramunitParam: TemporalUtil$Unit, paramroundingModeParam: TemporalUtil$RoundingMode): TruffleString;
    static timeZoneEquals(paramone: Object, paramtwo: Object, paramtoTimeZoneIdentifier: ToTemporalTimeZoneIdentifierNode): boolean;
    static toDateDurationRecordWithoutTime(paramcontext: JSContext, paramrealm: JSRealm, paramduration: JSTemporalDurationObject, paramnode: Node, paramerrorBranch: InlinedBranchProfile): JSTemporalDurationObject;
    static toDisambiguation(paramdisambiguation: TruffleString, paramequalNode: TruffleString$EqualNode): TemporalUtil$Disambiguation;
    static toISODayOfWeek(paramyear: number, parammonth: number, paramday: number): number;
    static toISODayOfYear(paramyear: number, parammonth: number, paramday: number): number;
    static toIntegerOrInfinity(paramvalue: Object): Number;
    static toIntegerWithTruncation(paramvalue: Object): Number;
    static toJSDynamicObject(paramitem: Object, paramnode: Node, paramerrorBranch: InlinedBranchProfile): JSDynamicObject;
    static toMonthCode(paramargument: Object): TruffleString;
    static toOffsetOption(paramoffsetOption: TruffleString, paramequalNode: TruffleString$EqualNode): TemporalUtil$OffsetOption;
    static toOffsetString(paramargument: Object): TruffleString;
    static toPositiveInteger(paramvalue: Object): number;
    static toRoundingMode(parammode: TruffleString, paramequalNode: TruffleString$EqualNode): TemporalUtil$RoundingMode;
    static toSecondsStringPrecisionRecord(paramsmallestUnit: TemporalUtil$Unit, paramfractionalDigitCount: number): JSTemporalPrecisionRecord;
    static toShowCalendar(paramshowCalendar: TruffleString, paramequalNode: TruffleString$EqualNode): TemporalUtil$ShowCalendar;
    static toShowCalendarOption(paramoptions: JSDynamicObject, paramgetOptionNode: TemporalGetOptionNode, paramequalNode: TruffleString$EqualNode): TemporalUtil$ShowCalendar;
    static toShowOffsetOption(paramoptions: JSDynamicObject, paramgetOptionNode: TemporalGetOptionNode): TruffleString;
    static toShowTimeZoneNameOption(paramoptions: JSDynamicObject, paramgetOptionNode: TemporalGetOptionNode): TruffleString;
    static toTemporalDisambiguation(paramoptions: Object, paramgetOptionNode: TemporalGetOptionNode, paramequalNode: TruffleString$EqualNode): TemporalUtil$Disambiguation;
    static toTemporalOffset(paramoptions: Object, paramfallback: TruffleString, paramgetOptionNode: TemporalGetOptionNode, paramequalNode: TruffleString$EqualNode): TemporalUtil$OffsetOption;
    static toTemporalOverflow(paramoptions: Object): TemporalUtil$Overflow;
    static toTemporalOverflow(paramoptions: Object, paramgetOptionNode: TemporalGetOptionNode): TemporalUtil$Overflow;
    static toTemporalTimeRecord(paramtemporalTimeLike: Object): JSTemporalDateTimeRecord;
    static toTemporalTimeZoneIdentifier(paramargument: Object): TruffleString;
    static toZeroPaddedDecimalString(paramnumber: number, paramdigits: number): TruffleString;
    static validateTemporalRoundingIncrement(paramincrement: number, paramdividend: number, paraminclusive: boolean, paramnode: Node, paramerrorBranch: InlinedBranchProfile): number;
    static validateTemporalUnitRange(paramlargestUnit: TemporalUtil$Unit, paramsmallestUnit: TemporalUtil$Unit): void;
    static weekOfToISOWeekOfYear(paramyear: number, parammonth: number, paramday: number): number;
    static yearOfToISOWeekOfYear(paramyear: number, parammonth: number, paramday: number): number;
    static zeroTimeDuration(): BigInt;
    constructor()
}