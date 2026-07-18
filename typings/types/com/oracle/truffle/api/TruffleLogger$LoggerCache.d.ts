import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleLogger$LoggerCache$ContextWeakReference } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache$ContextWeakReference.d.ts'
import type { TruffleLogger$LoggerCache$LoggerNode } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache$LoggerNode.d.ts'
import type { TruffleLogger$LoggerCache$NamedLoggerRef } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache$NamedLoggerRef.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleLogger$LoggerCache extends Object {
    constructor(loggerCacheSpi: Object)
    // private activeContexts: TruffleLogger$LoggerCache$ContextWeakReference[];
    // private effectiveLevels: JavaMap<string, Level>;
    // private knownIds: string[];
    // private loggerCache: Object;
    // private loggers: JavaMap<string, TruffleLogger$LoggerCache$NamedLoggerRef>;
    // private polyglotRootLogger: TruffleLogger;
    // private root: TruffleLogger$LoggerCache$LoggerNode;
    addLogLevelsForVMObject(vmObject: Object, addedLevels: JavaMap<string, Level>): void;
    // private addLogger(logger: TruffleLogger): boolean;
    close(): void;
    // private collectRemovedLevels(): string[];
    // private createParents(loggerName: string): void;
    // private findLoggerNode(loggerName: string): TruffleLogger$LoggerCache$LoggerNode;
    // private getEffectiveLevel(loggerName: string): Level;
    // private getKnownIds(): string[];
    // private getLogger(loggerName: string): TruffleLogger;
    // private getOrCreateLogger(loggerName: string): TruffleLogger;
    // private getOrCreateLogger(id: string, loggerName: string): TruffleLogger;
    getSPI(): Object;
    isLoggable(loggerName: string, level: Level): boolean;
    // private reconfigure(addedLevels: JavaMap<string, Level>, toRemove: string[]): void;
    // private removeContext(vmObject: Object): string[];
    removeLogLevelsForVMObject(vmObject: Object): void;
    // private setLoggerLevel(logger: TruffleLogger, loggerName: string, singleContext: boolean): void;
}