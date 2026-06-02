import type { UploadResult } from '../../../../../com/mojang/realmsclient/gui/screens/UploadResult.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UploadResult$Builder extends Object {
    constructor()
    // private errorMessage: string;
    // private statusCode: number;
    build(): UploadResult;
    withErrorMessage(errorMessage: string): UploadResult$Builder;
    withStatusCode(statusCode: number): UploadResult$Builder;
}