import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ConfigMemorySize } from '../../../com/typesafe/config/ConfigMemorySize.d.ts'
import type { ConfigMergeable } from '../../../com/typesafe/config/ConfigMergeable.d.ts'
import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigResolveOptions } from '../../../com/typesafe/config/ConfigResolveOptions.d.ts'
import type { ConfigValue } from '../../../com/typesafe/config/ConfigValue.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Period } from '../../../java/time/Period.d.ts'
import type { TemporalAmount } from '../../../java/time/temporal/TemporalAmount.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export interface Config extends ConfigMergeable, Object{
    atKey(arg0: string): Config;
    atPath(arg0: string): Config;
    checkValid(arg0: Config, ...arg1: string[]): void;
    entrySet(): Map$Entry<string, ConfigValue>[];
    getAnyRef(arg0: string): Object;
    getAnyRefList(arg0: string): (Object | null)[];
    getBoolean(arg0: string): boolean;
    getBooleanList(arg0: string): boolean[];
    getBytes(arg0: string): number;
    getBytesList(arg0: string): number[];
    getConfig(arg0: string): Config;
    getConfigList(arg0: string): Config[];
    getDouble(arg0: string): number;
    getDoubleList(arg0: string): number[];
    getDuration(arg0: string): Duration;
    getDuration(arg0: string, arg1: TimeUnit): number;
    getDurationList(arg0: string): Duration[];
    getDurationList(arg0: string, arg1: TimeUnit): number[];
    getEnum<T extends Enum<T>>(arg0: Class<T>, arg1: string): T;
    getEnumList<T extends Enum<T>>(arg0: Class<T>, arg1: string): T[];
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
    getValue(arg0: string): ConfigValue;
    hasPath(arg0: string): boolean;
    hasPathOrNull(arg0: string): boolean;
    isEmpty(): boolean;
    isResolved(): boolean;
    origin(): ConfigOrigin;
    resolve(): Config;
    resolve(arg0: ConfigResolveOptions): Config;
    resolveWith(arg0: Config): Config;
    resolveWith(arg0: Config, arg1: ConfigResolveOptions): Config;
    root(): JavaMap<any, any>;
    withFallback(arg0: ConfigMergeable): Config;
    withOnlyPath(arg0: string): Config;
    withValue(arg0: string, arg1: ConfigValue): Config;
    withoutPath(arg0: string): Config;
}