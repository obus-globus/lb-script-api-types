import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { GameTestException } from '../../../../net/minecraft/gametest/framework/GameTestException.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class UnknownGameTestException extends GameTestException {
    constructor(reason: Throwable)
    // private reason: Throwable;
    getDescription(): Component;
}