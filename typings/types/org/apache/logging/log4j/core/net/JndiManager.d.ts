import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { InitialContext } from '../../../../../../javax/naming/InitialContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
export class JndiManager extends AbstractManager {
    static createProperties(paraminitialContextFactoryName: string, paramproviderURL: string, paramurlPkgPrefixes: string, paramsecurityPrincipal: string, paramsecurityCredentials: string, paramadditionalProperties: { [key: string]: any }): { [key: string]: any };
    static getDefaultManager(): JndiManager;
    static getDefaultManager(paramname: string): JndiManager;
    static getJndiManager(paraminitialContextFactoryName: string, paramproviderURL: string, paramurlPkgPrefixes: string, paramsecurityPrincipal: string, paramsecurityCredentials: string, paramadditionalProperties: { [key: string]: any }): JndiManager;
    static getJndiManager(paramproperties: { [key: string]: any }): JndiManager;
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static hasManager(paramname: string): boolean;
    static isJndiContextSelectorEnabled(): boolean;
    static isJndiEnabled(): boolean;
    static isJndiJdbcEnabled(): boolean;
    static isJndiJmsEnabled(): boolean;
    static isJndiLookupEnabled(): boolean;
    private constructor(name: string, context: InitialContext)
    // private context: InitialContext;
    lookup<T extends unknown>(name: string): T;
    releaseSub(timeout: number, timeUnit: TimeUnit): boolean;
    toString(): string;
}