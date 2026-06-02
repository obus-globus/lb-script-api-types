import type { Object } from '../../../../java/lang/Object.d.ts'
export class UploadTokenCache extends Object {
    static get(paramrealmId: number): string;
    static invalidate(paramrealmId: number): void;
    static put(paramrealmId: number, paramtoken: string): void;
    constructor()
}