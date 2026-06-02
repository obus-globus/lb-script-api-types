import type { RealmsError } from '../../../../com/mojang/realmsclient/client/RealmsError.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
export class RealmsServiceException extends Exception {
    constructor(error: RealmsError)
    readonly message: string | null;
    realmsError: RealmsError;
}