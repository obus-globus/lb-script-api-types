import type { RealmsUploadException } from '../../../../../com/mojang/realmsclient/client/worldupload/RealmsUploadException.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsUploadFailedException extends RealmsUploadException {
    constructor(errorMessage: string)
    constructor(errorMessage: Component)
    // private errorMessage: Component;
    getStatusMessage(): Component;
}