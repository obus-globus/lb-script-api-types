import type { Record } from '../../../../java/lang/Record.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UploadInfo extends Record {
    static assembleUri(paramendpoint: string, paramportOverride: number): URI;
    static createRequest(paramuploadToken: string): string;
    static parse(paramjson: string): UploadInfo;
    constructor(worldClosed: boolean, token: string, uploadEndpoint: URI)
    // private token: string;
    // private uploadEndpoint: URI;
    // private worldClosed: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    token(): string;
    uploadEndpoint(): URI;
    worldClosed(): boolean;
}