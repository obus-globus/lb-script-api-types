import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VersionInfo extends Record {
    // private enabledProtocols: string[];
    // private implementationVersion: string;
    // private javaVersion: string;
    // private operatingSystem: string;
    // private platformName: string;
    // private platformVersion: string;
    // private pluginVersion: string;
    // private serverProtocol: number;
    // private serverVersion: string;
    // private subPlatforms: string[];
    enabledProtocols(): string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    implementationVersion(): string;
    javaVersion(): string;
    operatingSystem(): string;
    platformName(): string;
    platformVersion(): string;
    pluginVersion(): string;
    serverProtocol(): number;
    serverVersion(): string;
    subPlatforms(): string[];
    toString(): string;
}