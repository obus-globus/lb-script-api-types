import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class OpenSsl extends Object {
    static availableCipherSuites(): string[];
    static availableJavaCipherSuites(): string[];
    static availableOpenSslCipherSuites(): string[];
    static ensureAvailability(): void;
    static isAlpnSupported(): boolean;
    static isAvailable(): boolean;
    static isCipherSuiteAvailable(paramarg0: string): boolean;
    static isOcspSupported(): boolean;
    static isRenegotiationSupported(): boolean;
    static supportsHostnameValidation(): boolean;
    static supportsKeyManagerFactory(): boolean;
    static unavailabilityCause(): Throwable;
    static version(): number;
    static versionString(): string;
    private constructor()
}