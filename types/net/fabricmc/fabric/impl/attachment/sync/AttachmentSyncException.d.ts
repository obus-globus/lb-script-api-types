import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class AttachmentSyncException extends Exception {
    constructor(arg0: Component)
    readonly component: Component;
    getComponent(): Component;
}