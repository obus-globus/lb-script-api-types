import type { EventHandler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/events/EventHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Domain extends Object {
    constructor()
    readonly enabled: boolean;
    eventHandler: EventHandler;
    disable(): void;
    doDisable(): void;
    doEnable(): void;
    enable(): void;
    isEnabled(): boolean;
    notifyClosing(): void;
    notifyDisabled(): void;
    setEventHandler(eventHandler: EventHandler): void;
}