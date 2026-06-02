import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class RealmsUploadException extends RuntimeException {
    constructor()
    getErrorMessages(): Component[];
    getStatusMessage(): Component;
}