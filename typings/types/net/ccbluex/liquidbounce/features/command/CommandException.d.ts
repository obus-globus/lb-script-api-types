import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class CommandException extends Exception {
    constructor(text: MutableComponent, cause: Throwable | null, usageInfo: Component[])
    readonly message: string;
    readonly text: MutableComponent;
    readonly usageInfo: Component[];
}