import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LoggerContext } from '../../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractConfiguration } from '../../../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
import type { ConfigurationSource } from '../../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { Node } from '../../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { Component } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/Component.d.ts'
import type { PluginManager } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginManager.d.ts'
import type { StatusConfiguration } from '../../../../../../../../org/apache/logging/log4j/core/config/status/StatusConfiguration.d.ts'
export class BuiltConfiguration extends AbstractConfiguration {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getDefaultLevel(): Level;
    constructor(loggerContext: LoggerContext, source: ConfigurationSource, rootComponent: Component)
    // private appendersComponent: Component;
    // private asyncWaitStrategyFactoryComponent: Component;
    readonly contentType: string;
    // private customLevelsComponent: Component;
    // private filtersComponent: Component;
    // private loggersComponent: Component;
    // private monitorResourcesComponent: Component;
    // private propertiesComponent: Component;
    // private rootComponent: Component;
    // private scriptsComponent: Component;
    // private statusConfig: StatusConfiguration;
    convertToNode(parent: Node, component: Component): Node;
    createAdvertiser(advertiserString: string, configSource: ConfigurationSource): void;
    createAdvertiser(advertiserString: string, configSource: ConfigurationSource, buffer: number[], contentType: string): void;
    getContentType(): string;
    getPluginManager(): PluginManager;
    getStatusConfiguration(): StatusConfiguration;
    setContentType(contentType: string): void;
    setMonitorInterval(intervalSeconds: number): void;
    setPluginPackages(packages: string): void;
    setShutdownHook(flag: string): void;
    setShutdownTimeoutMillis(shutdownTimeoutMillis: number): void;
    setup(): void;
}