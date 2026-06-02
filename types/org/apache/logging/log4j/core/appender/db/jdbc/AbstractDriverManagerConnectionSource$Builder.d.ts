import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class AbstractDriverManagerConnectionSource$Builder<B extends AbstractDriverManagerConnectionSource$Builder<B>> extends Object {
    constructor()
    connectionString: string;
    driverClassName: string;
    password: string[];
    properties: Property[];
    userName: string[];
    asBuilder(): B;
    getConnectionString(): string;
    getDriverClassName(): string;
    getPassword(): string[];
    getProperties(): Property[];
    getUserName(): string[];
    setConnectionString(connectionString: string): B;
    setDriverClassName(driverClassName: string): B;
    setPassword(password: string[]): B;
    setProperties(properties: Property[]): B;
    setUserName(userName: string[]): B;
}