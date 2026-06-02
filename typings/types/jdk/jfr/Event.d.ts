import type { Event } from '../../jdk/internal/event/Event.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Event extends Event {
    constructor()
    begin(): void;
    commit(): void;
    end(): void;
    isEnabled(): boolean;
    set(arg0: number, arg1: Object): void;
    shouldCommit(): boolean;
}