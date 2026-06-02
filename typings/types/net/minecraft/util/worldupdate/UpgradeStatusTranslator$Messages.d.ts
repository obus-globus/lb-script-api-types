import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { UpgradeProgress$Status } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress$Status.d.ts'
export class UpgradeStatusTranslator$Messages extends Record {
    static create(paramtype: string): UpgradeStatusTranslator$Messages;
    constructor(upgrading: Component, finished: Component)
    // private finished: Component;
    // private upgrading: Component;
    equals(o: Object | null): boolean;
    finished(): Component;
    forStatus(status: UpgradeProgress$Status): Component;
    hashCode(): number;
    toString(): string;
    upgrading(): Component;
}