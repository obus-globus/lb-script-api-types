import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class GameTestException extends RuntimeException {
    constructor(message: string)
    getDescription(): Component;
}