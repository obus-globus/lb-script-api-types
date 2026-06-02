import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
export class Loggers extends Object {
    constructor(map: { [key: string]: LoggerConfig }, root: LoggerConfig)
    readonly map: { [key: string]: LoggerConfig };
    readonly root: LoggerConfig;
    getMap(): { [key: string]: LoggerConfig };
    getRoot(): LoggerConfig;
}