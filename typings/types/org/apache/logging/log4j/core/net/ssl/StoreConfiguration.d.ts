import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PasswordProvider } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/PasswordProvider.d.ts'
export class StoreConfiguration<T extends Object | number | string | boolean> extends Object {
    constructor(location: string, password: string[])
    constructor(location: string, password: string)
    constructor(location: string, passwordProvider: () => string[])
    readonly location: string;
    // private passwordProvider: () => string[];
    clearSecrets(): void;
    equals(obj: Object | null): boolean;
    getLocation(): string;
    getPassword(): string;
    getPasswordAsCharArray(): string[];
    hashCode(): number;
    load(): T;
    setLocation(location: string): void;
    setPassword(password: string[]): void;
    setPassword(password: string): void;
}