import type { Object } from '../../../java/lang/Object.d.ts'
export class Sysfs extends Object {
    static queryBiosDescription(): string;
    static queryBiosReleaseDate(): string;
    static queryBiosVendor(): string;
    static queryBiosVersion(paramarg0: string): string;
    static queryBoardModel(): string;
    static queryBoardSerial(): string;
    static queryBoardVendor(): string;
    static queryBoardVersion(): string;
    static queryProductModel(): string;
    static queryProductSerial(): string;
    static querySystemVendor(): string;
    static queryUUID(): string;
    private constructor()
}