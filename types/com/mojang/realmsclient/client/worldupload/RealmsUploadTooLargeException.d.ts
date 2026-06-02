import type { RealmsUploadException } from '../../../../../com/mojang/realmsclient/client/worldupload/RealmsUploadException.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsUploadTooLargeException extends RealmsUploadException {
    constructor(sizeLimit: number)
    // private sizeLimit: number;
    getErrorMessages(): Component[];
}