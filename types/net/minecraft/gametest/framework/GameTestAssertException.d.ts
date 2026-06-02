import type { GameTestException } from '../../../../net/minecraft/gametest/framework/GameTestException.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class GameTestAssertException extends GameTestException {
    constructor(message: Component, tick: number)
    readonly message: string | null;
    readonly message: Component;
    // private tick: number;
    getDescription(): Component;
}