import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { GameTestAssertException } from '../../../../net/minecraft/gametest/framework/GameTestAssertException.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class GameTestAssertPosException extends GameTestAssertException {
    constructor(baseMessage: Component, absolutePos: BlockPos, relativePos: BlockPos, tick: number)
    readonly absolutePos: BlockPos;
    readonly relativePos: BlockPos;
    getAbsolutePos(): BlockPos;
    getDescription(): Component;
    getMessageToShowAtBlock(): Component;
    getRelativePos(): BlockPos;
}