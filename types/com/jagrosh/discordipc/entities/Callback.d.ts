import type { Packet } from '../../../../com/jagrosh/discordipc/entities/Packet.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Callback extends Object {
    constructor()
    constructor(arg0: (param0: Packet) => void)
    constructor(arg0: (param0: Packet) => void, arg1: (param0: string) => void)
    // private failure: (param0: string) => void;
    // private success: (param0: Packet) => void;
    fail(arg0: string): void;
    isEmpty(): boolean;
    succeed(arg0: Packet): void;
}