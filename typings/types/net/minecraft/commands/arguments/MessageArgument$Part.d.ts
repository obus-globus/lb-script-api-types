import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { EntitySelector } from '../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class MessageArgument$Part extends Record {
    constructor(start: number, end: number, selector: EntitySelector)
    // private end: number;
    // private selector: EntitySelector;
    // private start: number;
    end(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    selector(): EntitySelector;
    start(): number;
    toComponent(sender: CommandSourceStack): Component;
    toString(): string;
}