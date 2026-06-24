import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class LevelStorageException extends RuntimeException {
    constructor(message: Component)
    constructor(message: Component, e: Exception)
    readonly messageComponent: Component;
    getMessageComponent(): Component;
}