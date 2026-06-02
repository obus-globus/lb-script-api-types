import type { Object } from '../../../java/lang/Object.d.ts'
export interface X509Extension extends Object{
    getCriticalExtensionOIDs(): string[];
    getExtensionValue(arg0: string): number[];
    getNonCriticalExtensionOIDs(): string[];
    hasUnsupportedCriticalExtension(): boolean;
}