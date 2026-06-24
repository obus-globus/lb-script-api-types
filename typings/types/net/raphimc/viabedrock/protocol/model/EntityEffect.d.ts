import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityEffect extends Record {
    constructor(identifier: string, amplifier: number, duration: AtomicInteger, showParticles: boolean, ambient: boolean)
    constructor(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    // private ambient: boolean;
    // private amplifier: number;
    // private duration: AtomicInteger;
    // private identifier: string;
    // private showParticles: boolean;
    ambient(): boolean;
    amplifier(): number;
    duration(): AtomicInteger;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): string;
    showParticles(): boolean;
    toString(): string;
}