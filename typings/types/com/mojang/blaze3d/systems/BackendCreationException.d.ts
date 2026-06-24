import type { BackendCreationException$Reason } from '../../../../com/mojang/blaze3d/systems/BackendCreationException$Reason.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
export class BackendCreationException extends Exception {
    constructor(message: string, reason: BackendCreationException$Reason)
    constructor(message: string, reason: BackendCreationException$Reason, missingCapabilities: string[])
    readonly missingCapabilities: string[];
    readonly reason: BackendCreationException$Reason;
    getMissingCapabilities(): string[];
    getReason(): BackendCreationException$Reason;
}