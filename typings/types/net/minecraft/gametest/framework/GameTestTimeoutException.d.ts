import type { GameTestException } from '../../../../net/minecraft/gametest/framework/GameTestException.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class GameTestTimeoutException extends GameTestException {
    constructor(message: Component)
    readonly message: Component;
    getDescription(): Component;
}