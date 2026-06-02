import type { Object } from '../../../../java/lang/Object.d.ts'
export class XmsClientTelemetryInfo extends Object {
    constructor()
    readonly serverErrorCode: string;
    readonly serverSubErrorCode: string;
    readonly speInfo: string;
    readonly tokenAge: string;
    getServerErrorCode(): string;
    getServerSubErrorCode(): string;
    getSpeInfo(): string;
    getTokenAge(): string;
}