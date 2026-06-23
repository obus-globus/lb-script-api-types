import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PropertiesUtil$Environment } from '../../../../../org/apache/logging/log4j/util/PropertiesUtil$Environment.d.ts'
import type { PropertySource } from '../../../../../org/apache/logging/log4j/util/PropertySource.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export class PropertiesUtil extends Object {
    static extractSubset(paramproperties: { [key: string]: any }, paramprefix: string): { [key: string]: any };
    static getProperties(): PropertiesUtil;
    static getSystemProperties(): { [key: string]: any };
    static partitionOnCommonPrefixes(paramproperties: { [key: string]: any }): { [key: string]: { [key: string]: any } };
    static partitionOnCommonPrefixes(paramproperties: { [key: string]: any }, paramincludeBaseKey: boolean): { [key: string]: { [key: string]: any } };
    constructor(props: { [key: string]: any })
    constructor(propertiesFileName: string)
    private constructor(propertiesFileName: string, useTccl: boolean)
    constructor(source: PropertySource)
    // private environment: PropertiesUtil$Environment;
    addPropertySource(propertySource: PropertySource): void;
    getBooleanProperty(prefixes: string[], key: string, supplier: () => boolean): boolean;
    getBooleanProperty(name: string): boolean;
    getBooleanProperty(name: string, defaultValue: boolean): boolean;
    getBooleanProperty(name: string, defaultValueIfAbsent: boolean, defaultValueIfPresent: boolean): boolean;
    getCharsetProperty(name: string): Charset;
    getCharsetProperty(name: string, defaultValue: Charset): Charset;
    getDoubleProperty(name: string, defaultValue: number): number;
    getDurationProperty(prefixes: string[], key: string, supplier: () => Duration): Duration;
    getDurationProperty(name: string, defaultValue: Duration): Duration;
    getIntegerProperty(prefixes: string[], key: string, supplier: () => number): number;
    getIntegerProperty(name: string, defaultValue: number): number;
    getLongProperty(prefixes: string[], key: string, supplier: () => number): number;
    getLongProperty(name: string, defaultValue: number): number;
    getStringProperty(prefixes: string[], key: string, supplier: () => string): string;
    getStringProperty(name: string): string;
    getStringProperty(name: string, defaultValue: string): string;
    hasProperty(name: string): boolean;
    isOsWindows(): boolean;
    reload(): void;
    removePropertySource(propertySource: PropertySource): void;
}