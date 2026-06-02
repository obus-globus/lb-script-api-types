import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Tooltip } from '../../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class Report$CannotBuildReason extends Record {
    static COMMENT_TOO_LONG: Report$CannotBuildReason;
    static NOT_ATTESTED: Report$CannotBuildReason;
    static NO_REASON: Report$CannotBuildReason;
    static NO_REPORTED_MESSAGES: Report$CannotBuildReason;
    static TOO_MANY_MESSAGES: Report$CannotBuildReason;
    constructor(message: Component)
    // private message: Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): Component;
    toString(): string;
    tooltip(): Tooltip;
}