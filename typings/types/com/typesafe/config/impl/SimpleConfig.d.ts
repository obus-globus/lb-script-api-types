import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { ConfigMemorySize } from '../../../../com/typesafe/config/ConfigMemorySize.d.ts'
import type { ConfigMergeable } from '../../../../com/typesafe/config/ConfigMergeable.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigResolveOptions } from '../../../../com/typesafe/config/ConfigResolveOptions.d.ts'
import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { ConfigNumber } from '../../../../com/typesafe/config/impl/ConfigNumber.d.ts'
import type { MergeableValue } from '../../../../com/typesafe/config/impl/MergeableValue.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Period } from '../../../../java/time/Period.d.ts'
import type { TemporalAmount } from '../../../../java/time/temporal/TemporalAmount.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class SimpleConfig extends Object implements Config, MergeableValue, Serializable {
    static parseBytes(paramarg0: string, paramarg1: ConfigOrigin, paramarg2: string): BigInteger;
    static parseDuration(paramarg0: string, paramarg1: ConfigOrigin, paramarg2: string): number;
    static parsePeriod(paramarg0: string, paramarg1: ConfigOrigin, paramarg2: string): Period;
    constructor(arg0: JavaMap<any, any>)
    // private object: JavaMap<any, any>;
    atKey(arg0: ConfigOrigin, arg1: string): SimpleConfig;
    atKey(arg0: string): SimpleConfig;
    atPath(arg0: string): Config;
    checkValid(arg0: Config, ...arg1: string[]): void;
    entrySet(): Map$Entry<string, ConfigValue>[];
    equals(arg0: Object | null): boolean;
    find(arg0: Path, arg1: ConfigValueType, arg2: Path): AbstractConfigValue;
    find(arg0: string, arg1: ConfigValueType): AbstractConfigValue;
    // private findOrNull(arg0: Path, arg1: ConfigValueType, arg2: Path): AbstractConfigValue;
    // private findOrNull(arg0: string, arg1: ConfigValueType): AbstractConfigValue;
    getAnyRef(arg0: string): Object;
    getAnyRefList(arg0: string): (Object | null)[];
    getBoolean(arg0: string): boolean;
    getBooleanList(arg0: string): boolean[];
    getBytes(arg0: string): number;
    // private getBytesBigInteger(arg0: string): BigInteger;
    getBytesList(arg0: string): number[];
    // private getBytesListBigInteger(arg0: string): BigInteger[];
    getConfig(arg0: string): SimpleConfig;
    getConfigList(arg0: string): Config[];
    // private getConfigNumber(arg0: string): ConfigNumber;
    getDouble(arg0: string): number;
    getDoubleList(arg0: string): number[];
    getDuration(arg0: string): Duration;
    getDuration(arg0: string, arg1: TimeUnit): number;
    getDurationList(arg0: string): Duration[];
    getDurationList(arg0: string, arg1: TimeUnit): number[];
    getEnum<T extends Enum<T>>(arg0: Class<T>, arg1: string): T;
    getEnumList<T extends Enum<T>>(arg0: Class<T>, arg1: string): T[];
    // private getEnumValue<T extends Enum<T>>(arg0: string, arg1: Class<T>, arg2: ConfigValue): T;
    // private getHomogeneousUnwrappedList<T extends unknown>(arg0: string, arg1: ConfigValueType): T[];
    // private getHomogeneousWrappedList<T extends ConfigValue>(arg0: string, arg1: ConfigValueType): T[];
    getInt(arg0: string): number;
    getIntList(arg0: string): number[];
    getIsNull(arg0: string): boolean;
    getList(arg0: string): (Object | null)[];
    getLong(arg0: string): number;
    getLongList(arg0: string): number[];
    getMemorySize(arg0: string): ConfigMemorySize;
    getMemorySizeList(arg0: string): ConfigMemorySize[];
    getMilliseconds(arg0: string): number;
    getMillisecondsList(arg0: string): number[];
    getNanoseconds(arg0: string): number;
    getNanosecondsList(arg0: string): number[];
    getNumber(arg0: string): Number;
    getNumberList(arg0: string): Number[];
    getObject(arg0: string): JavaMap<any, any>;
    getObjectList(arg0: string): JavaMap<any, any>[];
    getPeriod(arg0: string): Period;
    getString(arg0: string): string;
    getStringList(arg0: string): string[];
    getTemporal(arg0: string): TemporalAmount;
    getValue(arg0: string): AbstractConfigValue;
    hasPath(arg0: string): boolean;
    hasPathOrNull(arg0: string): boolean;
    // private hasPathPeek(arg0: string): ConfigValue;
    hashCode(): number;
    isEmpty(): boolean;
    isResolved(): boolean;
    origin(): ConfigOrigin;
    // private peekPath(arg0: Path): AbstractConfigValue;
    resolve(): SimpleConfig;
    resolve(arg0: ConfigResolveOptions): SimpleConfig;
    resolveWith(arg0: Config): SimpleConfig;
    resolveWith(arg0: Config, arg1: ConfigResolveOptions): SimpleConfig;
    root(): JavaMap<any, any>;
    toFallbackValue(): JavaMap<any, any>;
    // private toLong(arg0: BigInteger, arg1: ConfigOrigin, arg2: string): number;
    toString(): string;
    withFallback(arg0: ConfigMergeable): SimpleConfig;
    withOnlyPath(arg0: string): SimpleConfig;
    withValue(arg0: string, arg1: ConfigValue): SimpleConfig;
    withoutPath(arg0: string): SimpleConfig;
    // private writeReplace(): Object;
}